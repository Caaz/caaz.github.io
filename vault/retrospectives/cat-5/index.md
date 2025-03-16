---
title: Cat-5
summary: I modeled Cat-5 from Cassette Beasts recently, and here's what I've learned from it.
draft: false
date: 2025-03-16T14:22:58
lastmod: 2025-03-16T15:42:20
post: 3lkeq7qpfsk25
---
Over a couple of days, I decided I needed to learn how to rig a bit better, and figure out how to convey *shape* better in 3D. To do so, I picked something out of the ordinary for me, [Cat-5](https://wiki.cassettebeasts.com/wiki/Cat-5) From [Cassette Beasts](https://www.cassettebeasts.com).

This is outside of the norm for me because this reference isn't highly detailed, it's pixel art, there's some choices I'll have to make to convey its form that I was going to have to figure out from its animations. You only ever see one side of Cat-5, and some shapes make sense in 2D, but do they work in 3D?
![[sprite.png]]
Additionally, those legs are something I've never *really* tried to rig with inverse kinematics. I had done something like that a bit while working on [[game-ideas/dragon/index|Dragon Soul]], but I had yet to rig the legs, they simply hung there.

## Goals
I wanted to animate Cat-5's idle animation. It stands in a bit of a twist, and holds its paw up, ready to strike. It's quite a dynamic pose, and I knew I was going to need good topology around the torso in order to make that twist look correct. Additionally, I noticed the tufts of fur at the elbow seems to move with the forearm.

## Modifiers
As I've gotten more comfortable with Blender, I've started getting used to a fairly standard modifier stack for the models I work on.
![[modifiers.png]]
## Topology
What I wound up with here was put together rather quickly, and I made use of marking edges as "sharp" as well as marking creases to get certain areas looking well, sharp. It helped define the form without a ton of geometry -- this is something I learned while creating this model
![[topology-front.png]]
![[topology-side.png]]![[topology-top.png]]
## UV Mapping and Texturing
UV Mapping this model wound up fairly relaxing and simple, due to the large solid shapes and coloring. 
![[texture.png]]


I feel like I could've done a better job defining seams here, it's not clear in some areas what the UV mapping is mapping exactly. That big blob bottom left? That's the leg. Seams should've been defined to separate that yellow section from the blue section. Similarly, on the bottom right, we have the arms, in which the vertices just get squished together where it meets the claws. Here, I feel the seems were proper, but additional seams could've been added to differentiate the paw pieces. Again though, these situations barely had a real effect on the end result.
## Shading
For this project, I wanted to avoid creating a Godot project, because I felt like if I did I'd wind up spending a bunch of time playing around with shaders in there. Instead, I opted to do the shader in Blender's Shader nodes. It's simple, and applies a basic cel shaded look to the model.
![[shader.png]]
Something here I could've paid more attention to, is that this shader caused the colors to look *wrong* And when I posted it I didn't realize just how wrong exactly. The yellows were looking unsaturated and needed adjustment. While writing this post, I went back and recolored the model to match the sprite more. I should be careful when applying shaders like this in the future.
## Rigging
The rig for this model pulled out every trick I know how to do.
![[rig.png]]
The arms are set up with Inverse Kinematics, as are the legs (twice over). The Tails, however, are set up using Blender's Spline IK, each targeting an individual curve. This allows for more fluid movement across the 5 bones that make up the tail.
![[tail-ik.png]]
When working in the pose mode, I have the IK bones set to look like an icosahedron, which I find looks nice and stands out against the rest of the model.
![[ik-rig.png]]

## End Result
I'm fairly happy with the end result I've managed to end up with. If you want to see the animation, check it out on [BlueSky](https://bsky.app/profile/caaz.me/post/3lkeq7qpfsk25)! (with some desaturated colors, and a bit of hand clipping)
![[finished.png]]

### What's Next?
I *may* make more cassette beasts models. It's a game full of really interesting designs and I can see it having a lot of interesting unique challenges in it. Since these models are rigged, I could probably even make a mod to show them in-game. That'd be neat.