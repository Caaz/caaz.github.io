---
title: Shading like Caaz, the Mob Psycho 100 Effect
summary: An informal process to creating shaders in Godot 4.4
draft: false
date: 2025-03-18T09:18:00
lastmod: 2025-03-18T15:01:06
post: 3lkonunz7ps2m
---

> Heads up! I probably don't have gdshader syntax coloring set up, forgive me! Also, this was written for Godot 4.4!

I feel like a lot of folks are afraid of Godot shaders, but you really shouldn't be. Shaders are intimidating because there's a lot of math, and it feels like every change makes sweeping changes across everything, it becomes difficult to manage and keep track of.

Here, I'd like to break down my approach to shading. Specifically, how I went about replicate the psychic effect used in Mob Psycho 100.
![[mob-screenshot.png]]
## Breaking it Down
Now, I don't know what this pattern is called, but on a close look at it, it's clear that it's made up of a lot of circles. Those circles seem evenly spaced, so I open GIMP and do some high tech analysis of the image, by creating circles over the circles so that I can see the circles from the circles.
![[high-tech-analysis.png]]
From what we can see here it's actually two grids of circles, offset from each other, slightly rotated.
### The Plan
Ignoring the rotation (because I'm lazy), then all we have to do is three steps to replicate that pattern.
![[the-plan.png]]
You may note here that I'm completely ignoring the pretty colors and gradient here. That's because I don't have a plan! It looks like a radial gradient to me, I've never tried making a radial gradient, so my plan is as follows: Plug some numbers in and see what happens.
## Shading

### Step 1: Top Circle
```gdshader
shader_type spatial;
render_mode unshaded;

float circle(vec2 uv) {
	return 1.0 - step(.5, distance(uv, vec2(.5)));
}

void fragment() {
//	We're going to base our UV on the normal UV coordinates, for now.
//	This helps us figure out the pattern before we get too complicated.
	vec2 base_uv = UV;
//	We're putting this in its own variable, and not directly using UV in future code.
//	This'll allow us to scale nicely, when we get there. (to repeat the pattern!)
	vec2 uv = base_uv;
//	Let's start simple, draw our first top circle.
	vec3 color = mix(vec3(0), vec3(1), circle(uv+vec2(0,.5)));
//  Finally, we apply our color to the object
	ALBEDO = color;
}
```
#### Masking?
Masking is a common feature of image editing and it's something that translates well into shaders.
The `circle` function set up here is set to return a float, but it effectively acts as a boolean. 0 when we're outside of the circle, 1 when we're inside.

The `mix` function is doing the functionality of masking, we plug in our "mask" as the third argument, which makes our color (right now just white) only show when we're inside the circle.

We can use this technique to set up "layers" adding to our color variable with masks to create additional layers.

### Step 2: The rest of the pattern.
So, let's follow the rest of our plan with the masking pattern. We're basically drawing this circle at various positions, using a vec2 to adjust the position of the uv for each call.
```
//	...Our first top circle.
	vec3 color = mix(vec3(0), vec3(1), circle(uv+vec2(0,.5)));
//	Step 2, lets do our side circles!
	color = mix(color, vec3(1,0,0), circle(uv+vec2(.5,0)));
	color = mix(color, vec3(1,0,0), circle(uv+vec2(-.5,0)));
//	Step 3, the bottom circle!
	color = mix(color, vec3(1), circle(uv+vec2(0,-.5)));
//  Finally, we apply our color to the object
	ALBEDO = color;
```
Simple, right? If you're following along, you should have the pattern described in our plan. If you scale it, you'll even see it repeated, and watch the circles meet up at the edges to look more like the pattern we're shooting for
#### Scaling?
To scale our pattern, and repeat it across the entire object, we should do two things
- Make a `uniform float` to allow us to change the scale from the shader parameters
- Adjust our `uv` variable to use it.

Here's what those changes look like:
```gdshader
shader_type spatial;
render_mode unshaded;

// Let's add some unifoms to allow us to adjust the shader at runtime
uniform float scale = 1.0;

float circle(vec2 uv) {
	return 1.0 - step(.5, distance(uv, vec2(.5)));
}

void fragment() {
	vec2 base_uv = UV;
//	Apply our scale to the base_uv, allowing us to repeat this pattern
	vec2 uv = base_uv * scale;
//	Now let's fract our uv!
	uv = fract(uv);
	
//	Draw our four circles...
	vec3 color = mix(vec3(0), vec3(1), circle(uv+vec2(0,.5)));
	color = mix(color, vec3(1,0,0), circle(uv+vec2(.5,0)));
	color = mix(color, vec3(1,0,0), circle(uv+vec2(-.5,0)));
	color = mix(color, vec3(1), circle(uv+vec2(0,-.5)));

	ALBEDO = color;
}
```
![[scaled-pattern.png]]
### Step 3: Refactor!
Lets simplify the code now, by using a loop for our four circles and positions. This is going to make rendering the colors on the circles a lot easier going forward. Lets define our four offset positions in an array that we can access in a loop
```gdshader
shader_type spatial;
render_mode unshaded;

uniform float scale = 1.0;

// Our circle positions!
const vec2 POSITIONS[] = {
	vec2(0, .5),
	vec2(.5,0),
	vec2(-.5,0),
	vec2(0, -.5)
};

float circle(vec2 uv) {
	return 1.0 - step(.5, distance(uv, vec2(.5)));
}

void fragment() {
	vec2 base_uv = UV;
	vec2 uv = base_uv * scale;
	uv = fract(uv);
	
//	Draw our circles
	vec3 color;
	for (int i = 0; i < POSITIONS.length(); i++) {
		vec2 offset_uv = uv + POSITIONS[i];
//		We're going to use offset_uv here to define the color, this is just to make it visible
//		If we just used vec3(1), they'd all just merge together and it'd be difficult to see what's going on!
		vec3 circle_color =  vec3(offset_uv,1);
		color = mix(color, circle_color, circle(offset_uv));
	}

	ALBEDO = color;
}
```
![[refactored-pattern.png]]
### Step 4: Radial Gradient
Time for the part I have no plan for! Let me walk you through my incredibly scientific trial and error. To do so, I've set my scale to 1.0, and I've set POSITIONS to only have one element, `vec2(0,0)`. This allows me to view a single circle, and test just the gradient pattern I'm trying to achieve.

I know to do a radial gradient, I'm probably going to want the angle of the current pixel to the center. To get that, I use atan.
```gdshader
shader_type spatial;
render_mode unshaded;

uniform float scale = 1.0;

// Let's test just a single circle for now
const vec2 POSITIONS[] = {
	vec2(0,0)
	//vec2(0, .5),
	//vec2(.5,0),
	//vec2(-.5,0),
	//vec2(0, -.5)
};

float circle(vec2 uv) {
	return 1.0 - step(.5, distance(uv, vec2(.5)));
}

void fragment() {
	vec2 base_uv = UV;
	vec2 uv = base_uv * scale;
	uv = fract(uv);
	
//	Draw our circles
	vec3 color;
	for (int i = 0; i < POSITIONS.length(); i++) {
		vec2 offset_uv = uv + POSITIONS[i];

		float angle = atan(.5 - offset_uv.y, .5 - offset_uv.x);
		angle = fract(angle);
		
		vec3 circle_color =  vec3(angle);
		color = mix(color, circle_color, circle(offset_uv));
	}

	ALBEDO = color;
}
```
![[atan-result.png]]
So what we have here looks like a circle roughly divided into 6.28 pieces, you can tell because I'm guessing. That's a sign to my trial-and-error brain that atan returns radians. Math nerds would've already known that, I'm just a chill guy.

The only thing I know about radians is that sin/cos can be used to determine the distance between one angle and another.
```gdshader

float angle = atan(.5 - offset_uv.y, .5 - offset_uv.x);
float some_angle = 0.0;
float distance_to_angle = sin(angle + some_angle);
vec3 circle_color =  vec3(distance_to_angle);
color = mix(color, circle_color, circle(offset_uv));
```

![[sin-distance.png]]
To mirror it, we can simply add `PI` to `some_angle`
```gdshader
//		figure out our distance to 0
		float some_angle = 0.0;
		float distance_to_angle = sin(angle + some_angle);
//		Same thing, but mirrored!
		some_angle += PI;
//		We use max here to ensure we're only getting the highest value 
		distance_to_angle = max(distance_to_angle, sin(angle + some_angle));
		
		vec3 circle_color =  vec3(distance_to_angle);
		color = mix(color, circle_color, circle(offset_uv));
```
![[sin-mirrored.png]]
It's starting to look like a disc now! We can tighten up the gradient, by adding a quick power after our caluculations (but before using it in color)
```gdshader
distance_to_angle = pow(distance_to_angle, 6.);
```

![[powered-pattern.png]]Now, if you've been keeping track of the coding patterns I've been using so far, you'll note that this distance_to_angle is a float, and it's *probably* from 0-1 (we can clamp it if it's not, if that matters, who knows, that's for the math nerds). This means that we're going to use this value as a mask!

#### Refactor, but again!
Lets do some quick refactoring, to make this radial gradient reusable. Here's where I am at this point. I've added a uniform for the power value we're using for the gradient, this should make it easier to tweak to our liking later.
```gdshader
shader_type spatial;
render_mode unshaded;

uniform float scale = 1.0;
uniform float gradient_power = 10.;

// Our circle positions!
const vec2 POSITIONS[] = {
	vec2(0,0)
	//vec2(0, .5),
	//vec2(.5,0),
	//vec2(-.5,0),
	//vec2(0, -.5)
};

float circle(vec2 uv) {
	return 1.0 - step(.5, distance(uv, vec2(.5)));
}

float radial_gradient(vec2 uv, float target_angle) {
	float angle_to_center = atan(.5 - uv.y, .5 - uv.x);
	float distance_to_angle = max(
		sin(angle_to_center + target_angle), 
		sin(angle_to_center + target_angle + PI)
	);
	distance_to_angle = pow(distance_to_angle, gradient_power);
	return distance_to_angle;
}

void fragment() {
	vec2 base_uv = UV;
	vec2 uv = base_uv * scale;
	uv = fract(uv);
	
	vec3 color;
	for (int i = 0; i < POSITIONS.length(); i++) {
		vec2 offset_uv = uv + POSITIONS[i];
		float gradient = radial_gradient(offset_uv, 0.0);
		
		vec3 circle_color =  vec3(gradient);
		
		color = mix(color, circle_color, circle(offset_uv));
	}

	ALBEDO = color;
}
```

### Step 5: Coloring!
Right now, we're feeding the gradient in directly as the color we use for the circles. Let's use it as a mask instead. Let's set up three uniforms to hold our colors. up at the top, near scale.
```gdshader
uniform vec3 color_base:source_color;
uniform vec3 color_shine_a:source_color;
uniform vec3 color_shine_b:source_color;
```
Next, we can change our loop to use the radial gradient function as a mask, to apply our shine colors over the base color.
```gdshader
for (int i = 0; i < POSITIONS.length(); i++) {
	vec2 offset_uv = uv + POSITIONS[i];
	
	vec3 circle_color = color_base;
	circle_color = mix(circle_color, color_shine_a,  radial_gradient(offset_uv, 0.0));
	circle_color = mix(circle_color, color_shine_b,  radial_gradient(offset_uv, PI/2.));

	color = mix(color, circle_color, circle(offset_uv));
}
```
![[shiny.png]]
Looking more like the discs we were trying to replicate now, doesn't it?! With everything so aligned though, the pattern is looking a bit repetitive in a way we don't want. In the screenshot, everything is slightly angled, so let's add a rotation uniform to adjust how askew those gradients are, that should break up the pattern a bit.

Up near our other uniforms, add this variable...
```gdshader
uniform float gradient_rotation:hint_range(0, 3.141592654);
```

Updating our radial_gradient function to use it here...
```gdshader
float radial_gradient(vec2 uv, float target_angle) {
	float angle_to_center = atan(.5 - uv.y, .5 - uv.x);
//	offset the rotation!
	target_angle += gradient_rotation;
	float distance_to_angle = max(
		sin(angle_to_center + target_angle), 
		sin(angle_to_center + target_angle + PI)
	);
	distance_to_angle = pow(distance_to_angle, gradient_power);
	return distance_to_angle;
}
```
Scaling the pattern to see the whole thing, we can see that it's looking pretty good!
![[offset-angle-pattern.png]]
### Step 6: Finishing Touches
We've got the *hard part* out of the way, from here it's just a matter of breaking up the pattern. In Mob Psycho 100 we can see that the color shifts across the entire screen. Let's replicate that, using a noise texture.

But first! Some helper functions. I find working in hsv for hue shifting far simpler than using rgb. Let's quickly grab some helper methods for dong that. [This shader by al1-ce](https://godotshaders.com/shader/hsv-adjustment/) has a nice rgb2hsv and hsv2rgb function we'll use.

Continuing on, we'll a new uniform of type sampler2D, that'll be our hue shift map. Additionally, we'll want a new float for handling how strong the hue shift will affect the image.
```gdshader
uniform sampler2D hue_shift_map:hint_default_black;
uniform float hue_shift_strength:hint_range(-1.,1.);
```

Finally, after our loop for setting the colors of our circles, before we set our albedo, we'll apply the hue shifting.
```gdshader
float shift = texture(hue_shift_map, base_uv).r;
vec3 hsv = rgb2hsv(color);
hsv.r += shift * hue_shift_strength;
color = hsv2rgb(hsv);
```
![[hue-shifted-pattern.png]]
#### Screen UVs
In Mob Psycho 100, the pattern is always facing the user (and in most of these screenshots it has been too) but in reality, this is all being rendered to the plane's UV space. This isn't very cash money in the slightest.
![[perspective-pattern.png]]
Let's render it using the screen's UV instead. I hinted at this with our current set up of `base_uv` and `uv` variables.

We're going to want to change `base_uv` to use `SCREEN_UV`, but if you do that, you'll notice something awkward. The pattern *appears to be* squashed when looking at it with any screen aspect ratio that isn't 1:1
![[squashed-screen-uv.png]]
We can fix this by calculating the aspect ratio and multiplying one of the coordinates by it.
```gdshader
float aspect = VIEWPORT_SIZE.y/VIEWPORT_SIZE.x;
vec2 base_uv = vec2(SCREEN_UV.x, SCREEN_UV.y*aspect);
```

## Finished Product
With all those steps, you should have something that looks like this!
![[final.png]]

This isn't much on its own, but you could use an AnimationPlayer to animate the rotation or the noise used for hue shading! Use it with an outline shader and get the effect used in Mob Psycho 100!

I've posted this shader on [godotshaders here](https://godotshaders.com/shader/holographic-disc-pattern/), but here it is as well!
```gdshader
shader_type spatial;
render_mode unshaded;

uniform float scale = 1.0;
uniform float gradient_power = 10.;
uniform vec3 color_base:source_color;
uniform vec3 color_shine_a:source_color;
uniform vec3 color_shine_b:source_color;
uniform float gradient_rotation:hint_range(0, 3.141592654);
uniform sampler2D hue_shift_map:hint_default_black;
uniform float hue_shift_strength:hint_range(-1.,1.);
uniform bool screen_uv = false;

const vec2 POSITIONS[] = {
	vec2(0, .5),
	vec2(.5,0),
	vec2(-.5,0),
	vec2(0, -.5)
};

vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float circle(vec2 uv) {
	return 1.0 - step(.5, distance(uv, vec2(.5)));
}

float radial_gradient(vec2 uv, float target_angle) {
	float angle_to_center = atan(.5 - uv.y, .5 - uv.x);
	target_angle += gradient_rotation;
	float distance_to_angle = max(
		sin(angle_to_center + target_angle), 
		sin(angle_to_center + target_angle + PI)
	);
	distance_to_angle = pow(distance_to_angle, gradient_power);
	return distance_to_angle;
}

void fragment() {
	vec2 base_uv = UV;
	if (screen_uv) {
		float aspect = VIEWPORT_SIZE.y/VIEWPORT_SIZE.x;
		base_uv = vec2(SCREEN_UV.x, SCREEN_UV.y*aspect);
	}
	vec2 uv = base_uv * scale;
	uv = fract(uv);
	
	vec3 color;
	for (int i = 0; i < POSITIONS.length(); i++) {
		vec2 offset_uv = uv + POSITIONS[i];
		
		vec3 circle_color = color_base;
		circle_color = mix(circle_color, color_shine_a,  radial_gradient(offset_uv, 0.0));
		circle_color = mix(circle_color, color_shine_b,  radial_gradient(offset_uv, PI/2.));

		color = mix(color, circle_color, circle(offset_uv));
	}
	
	float shift = texture(hue_shift_map, base_uv).r;
	vec3 hsv = rgb2hsv(color);
	hsv.r += shift * hue_shift_strength;
	color = hsv2rgb(hsv);

	ALBEDO = color;
}
```