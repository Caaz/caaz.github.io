---
title: Clouds
summary: Some clouds that cast shadows, in Godot 4.5
draft: false
date: 2026-01-21T13:53:50
lastmod: 2026-01-24T00:32:44
post: 3mcydoxio722e
---
So! A while back I made an [interesting cloud shader](https://bsky.app/profile/caaz.me/post/3m6zztcbgck2c). In it, I used 50 planes to simulate a volumetric-like clouds, which can cast shadows!

Because of how that shader stacked planes, it was *very* similar to volumetric clouds, but since it was done with low-tech options, it was possible to run this on Godot's Compatibility Renderer! This shader is *similar* to that, but only operates on one mesh and is far, far more performant.
## Tutorial
### Step 0: The Scene
For this scene, I'm keeping things simple. We'll *only* be shading the clouds
```
Node3D
- MeshInstance3D (Floor, a 100x100m PlaneMesh)
- MeshInstance3D (Clouds, a 100x100m PlaneMesh)
- MeshInstance3D (Cube, a 1x1m BoxMesh)
- DirectionalLight3D (With Shadows Enabled, pointing straight down)
- WorldEnvironment (With a basic proceedural Sky)
```
### Step 1: The absolute basics.
![[Screenshot 2026-01-21 14-23-32-55.jpg]]
```glsl
shader_type spatial;
render_mode unshaded, cull_disabled, depth_prepass_alpha;

uniform sampler2D cloud_texture;

void fragment() {
	ALPHA = texture(cloud_texture, UV).r;
}
```
The most basic clouds you can possibly have is this. A simplex noise texture being used as the alpha for a plane. The render mode is important here. `unshaded` allows us to draw exactly the colors we want here, rather than let lighting control it, `cull_disabled` allows both sides of the mesh to be visible, and `depth_prepass_alpha` allows shadows to render via the alpha channel. *it probably does more than that, but that's all I know*

### Step 2: Cloudier clouds
Let's add some more controls to this method though, and change the cloud noise to something a bit more cloud-like.
![[Screenshot 2026-01-21 15-22-40-799.jpg]]
```glsl
shader_type spatial;
render_mode unshaded, cull_disabled, depth_prepass_alpha;

uniform sampler2D cloud_texture;
/* Scales the UV */
uniform float uv_scale = .5;
/* Multiplies the density, to thicken the clouds */
uniform float density_multiplier = 1.5;
/* Sharpens the edges of clouds, creating more exact shadows. */
uniform float sharpness:hint_range(0,1) = 0.5;

void fragment() {
	// Set up the UV we'll be using to sample our texture
	vec2 uv = UV;
	// scale it
	uv *= uv_scale;
	
	// use our red channel as the density
	float density = texture(cloud_texture, uv).r;
	// allow us to multiply the density, to get bigger clouds!
	density *= density_multiplier;
	// make sure we're still within 0-1, though.
	density = clamp(density, 0, 1);
	// smooth step ourselves to cleaner edges.
	density = smoothstep(sharpness, 1, density);
	
	ALPHA = density;
}
```
For my cloud noise, I'm using FastNoiseLite's `Cellular` noise, with the Cellular Return Type set to `Distance2Sub`.  To me, this reads as more "Fluffy" clouds. I've also set up some uniforms...

| uniform              | description                                                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `uv_scale`           | Allows us to scale how we're sampling the cloud texture. This allows us to shrink or enlarge the clouds for now                    |
| `density_multiplier` | Allows us to strengthen the density of our clouds, allowing for more dense clouds.                                                 |
| `sharpness`          | Sharpens the edges of clouds, ensuring non-clouded areas are fully transparent. This gives us more precise shadows from our clouds |

### Step 3: World Coordinates, and a Sphere Mesh
Right now, our clouds are looking a bit flat and aren't really selling the effect of depth that we want. Let's change that by rendering the mesh to a squashed sphere, and use the normals (direction of its faces) of that sphere to only draw on the top half, giving us a snowglobe-like shape, if it got stepped on.
![[Screenshot 2026-01-21 17-02-02-471.jpg]]
```glsl
shader_type spatial;
render_mode unshaded, cull_disabled, depth_prepass_alpha;

uniform sampler2D cloud_texture;
/* Scales the UV */
uniform float uv_scale = .005;
/* Multiplies the density, to thicken the clouds */
uniform float density_multiplier = 1.5;
/* Sharpens the edges of clouds, creating more exact shadows. */
uniform float cloud_sharpness:hint_range(0,1) = 0.5;
/* Fades out near the horizon */
uniform float sky_sharpness:hint_range(0,1) = .5;

void fragment() {
	// This gets our position in world space.
    vec4 world_space = INV_VIEW_MATRIX * vec4(VERTEX, 1);
	// Now, we use the world space's x and z coordinates instead of the model's UV coordinates.
	vec2 uv = world_space.xz;
	// scale it. Now that we're using meters with a large mesh, this should probably be set to something very small
	uv *= uv_scale;
	
	// use our red channel as the density
	float density = texture(cloud_texture, uv).r;
	// allow us to multiply the density, to get bigger clouds!
	density *= density_multiplier;
	// make sure we're still within 0-1, though.
	density = clamp(density, 0, 1);
	
	// Get our normal in world coordinates.
    vec4 world_normal = INV_VIEW_MATRIX * vec4(NORMAL, 0);
	// figure out our upward direction. Since we want the inside top of the sphere here, we need to flip it.
	vec3 up = vec3(0,-1,0);
	if (FRONT_FACING) {
		up = vec3(0,1,0);
	}
	// Finally, we figure out if the face is facing the right direction.
	float sky = dot(up, world_normal.xyz);
	// Then fade it out near the edges.
	sky = smoothstep(sky_sharpness, 1, sky);
	// apply that to our final density, so that any values at or below 0 are fully transparent.
	density *= sky;
	
	// smooth step ourselves to cleaner edges.
	density = smoothstep(cloud_sharpness, 1, density);
	
	ALPHA = density;
}
```
Here the mesh is set to a SphereMesh, with a radius of 100m, and a height of 50m. This gives us a nice illusion of distant clouds that meet the horizon, and makes the world feel spherical, which I feel is a little important for immersion.

You'll notice that this comes before the final smoothstep to the density. I've found this looks a bit more natural, if you simply apply the sky to the density *after* the cloud sharpness, you get a gradient effect, but this gives us more of a half-gradient, half-cloud-density sort of look which feels more natural. It's always nice to play around with the order of operations here to get a feel for what does what.

In practice, you'll likely want to move this mesh along with your player to ensure they don't walk straight through it.

> Heads up! During some testing, you may want to choose a *much larger* mesh if you're going the "follow the player" method. Try 500m radius, and a height of 250m. 
> 
> You'll need to adjust the uv scale to something *very small* to account for the change in size here, so adjust the `uv *= uv_scale;` line to `uv *= uv_scale * .0001;`. This'll give you a ton more precision when editing the value in Godot's Inspector.
> 
> Shadows become harder to render at this range, so you may need to adjust your max shadow distance to compensate.
### Step 4: Simulating Wind
Now, this is something you're just going to have to take my word on since my site doesn't support animations (but I'll probably post a video on Bluesky so go follow me there to not miss anything!)

To make these clouds animated, we're going to do two things, *first* we switch our `cloud_texture` to a `cloud_volume`, and make it a `sampler3D` We'll use the width and height of the texture as normal, but the depth we'll shift through over time, using the `TIME` variable.

Second, we'll shift the UVs to simulate wind!
```glsl
shader_type spatial;
render_mode unshaded, cull_disabled, depth_prepass_alpha;

uniform sampler3D cloud_volume;
/* Scales the UV */
uniform float uv_scale = .005;
/* Multiplies the density, to thicken the clouds */
uniform float density_multiplier = 1.5;
/* Sharpens the edges of clouds, creating more exact shadows. */
uniform float cloud_sharpness:hint_range(0,1) = 0.5;
/* Fades out near the horizon */
uniform float sky_sharpness:hint_range(0,1) = .5;
/* How fast we shift through our z axis of the cloud_volume */
uniform float animation_speed = .1;
/* How fast the wind should be moving! */
uniform vec2 wind_speed;

void fragment() {
	// This gets our position in world space.
    vec4 world_space = INV_VIEW_MATRIX * vec4(VERTEX, 1);
	// Now, we use the world space's x and z coordinates instead of the model's UV coordinates.
	vec2 uv = world_space.xz;
	// Slide the UVs for wind!
	uv += wind_speed * TIME;
	// scale it. Now that we're using meters with a large mesh, this should probably be set to something very small
	uv *= uv_scale;
	
	// use our red channel as the density
	float density = texture(cloud_volume, vec3(uv, TIME * animation_speed)).r;
	// allow us to multiply the density, to get bigger clouds!
	density *= density_multiplier;
	// make sure we're still within 0-1, though.
	density = clamp(density, 0, 1);
	
	// Get our normal in world coordinates.
    vec4 world_normal = INV_VIEW_MATRIX * vec4(NORMAL, 0);
	// figure out our upward direction. Since we want the inside top of the sphere here, we need to flip it.
	vec3 up = vec3(0,-1,0);
	if (FRONT_FACING) {
		up = vec3(0,1,0);
	}
	// Finally, we figure out if the face is facing the right direction.
	float sky = dot(up, world_normal.xyz);
	// Then fade it out near the edges.
	sky = smoothstep(sky_sharpness, 1, sky);
	// apply that to our final density, so that any values at or below 0 are fully transparent.
	density *= sky;
	
	// smooth step ourselves to cleaner edges.
	density = smoothstep(cloud_sharpness, 1, density);
	
	ALPHA = density;
}

```
When setting up the new noise for the sampler3D parameter, I set 256 for the width and height, and 16 for the depth. We don't need a lot of changes over time, just enough to hint at some floofiness. The same parameters were used for the noise, cellular, distance2sub, etc.  You *may* have to adjust the UV Scale a bit.

### Step 5: Colors
Up until now our clouds have just been white, which works for this pretty daylight scene, but doesn't do so well for night scenes. We need some control over the colors of our clouds, since currently they aren't affected by the environment.
![[Screenshot 2026-01-21 19-40-19-562.jpg]]
```glsl
shader_type spatial;
render_mode unshaded, cull_disabled, depth_prepass_alpha;

uniform sampler3D cloud_volume;
/* Scales the UV */
uniform float uv_scale = .005;
/* Multiplies the density, to thicken the clouds */
uniform float density_multiplier = 1.5;
/* Sharpens the edges of clouds, creating more exact shadows. */
uniform float cloud_sharpness:hint_range(0,1) = 0.5;
/* Fades out near the horizon */
uniform float sky_sharpness:hint_range(0,1) = .5;
/* How fast we shift through our z axis of the cloud_volume */
uniform float animation_speed = .1;
/* How fast the wind should be moving! */
uniform vec2 wind_speed;

/* What color the cloud should be, based on its density.*/
uniform sampler2D color_ramp:repeat_disable;

void fragment() {
	// This gets our position in world space.
    vec4 world_space = INV_VIEW_MATRIX * vec4(VERTEX, 1);
	// Now, we use the world space's x and z coordinates instead of the model's UV coordinates.
	vec2 uv = world_space.xz;
	// Slide the UVs for wind!
	uv += wind_speed * TIME;
	// scale it. Now that we're using meters with a large mesh, this should probably be set to something very small
	uv *= uv_scale;
	
	// use our red channel as the density
	float density = texture(cloud_volume, vec3(uv, TIME * animation_speed)).r;
	// set our color based on how dense the initial sample is.
	vec4 color = texture(color_ramp, vec2(density, 0));
	
	// allow us to multiply the density, to get bigger clouds!
	density *= density_multiplier;
	// make sure we're still within 0-1, though.
	density = clamp(density, 0, 1);
	
	// Get our normal in world coordinates.
    vec4 world_normal = INV_VIEW_MATRIX * vec4(NORMAL, 0);
	// figure out our upward direction. Since we want the inside top of the sphere here, we need to flip it.
	vec3 up = vec3(0,-1,0);
	if (FRONT_FACING) {
		up = vec3(0,1,0);
	}
	// Finally, we figure out if the face is facing the right direction.
	float sky = dot(up, world_normal.xyz);
	// Then fade it out near the edges.
	sky = smoothstep(sky_sharpness, 1, sky);
	// apply that to our final density, so that any values at or below 0 are fully transparent.
	density *= sky;
	
	// Apply our color
	ALBEDO = color.rgb;
	
	// smooth step ourselves to cleaner edges.
	density = smoothstep(cloud_sharpness, 1, density);
	
	// ensure our color ramp can changeo the cloud alpha!
	ALPHA = density * color.a;
}
```
For my example, I'm using a color ramp that fades from a transparent, to a blue, to a white.
![[Pasted image 20260121194633.png]]
Because our color ramp can affect the final alpha, we can use this to create crisp edges now! We *might* be able to get away with refactoring out the density multiplier and sharpness values because of this! But for now, I'll keep them in, because they're still handy tools for changine the amount of clouds without touching our gradient.

Anyway, this allows us to make clouds that look reasonable at night, with a different gradient!
![[Screenshot 2026-01-21 19-52-34-778.jpg]]
![[Pasted image 20260121195314.png]]

## Going further
These clouds look great from a distance, but they're still pretty basic. There's *loads* of ways you can improve on them. For example...
### Collisions
Since these clouds work through world coordinates already, we *could* add SDF handling to have clouds move around objects like mountains or buildings. Basic SDF functions operating in world space should be able to cover this.
### Volumetrics
This could shader actively avoids volumetrics because of the need for shadows and performance. *however* if the player can ever go *through* these clouds, the illusion of depth will instantly evaporate. Something that could be interesting is pairing it with a volumetric shader that samples the same exact texture3D in worldspace. Then, depending on distance, you either render this simple cloud shader, or the volumetric cloud shader. Sort of like a really basic level-of-detail sort of thing.

Avoiding that though, you could absolutely mimic my original method of volumetric-like clouds, by stacking planes. The way I went about it was to set a uniform to offset the z value that we used for animating the clouds earlier.
### Daytime Blending
Right now it's possible to render nighttime clouds, and daytime clouds, but in practice if you have a night and day cycle, you'd probably want to blend between those (and possibly have a transitionary twilight step!) To do that, we'd need to set up *multiple* gradients and blend between them based on some value. This isn't too bad to set up, but it might require some refactoring to really feel any kind of nice or be presentable.