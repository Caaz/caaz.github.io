---
title: Project Structure
date: 2024-12-22T21:35:19
draft: false
summary: A suggested project structure for Godot projects involves separating scene-specific scripts from global scripts and placing them in their respective folders, making it easier to manage and refactor code.
lastmod: 2025-11-26T09:35:20
---
## The usual
Generally, the project structure I've seen most is as follows:
```
addons
	(third party plugins and assets)
assets
	art
		sprites
		tiles
		backgrounds
		ui
		vfx
	audio
		music
		sfx
resources
scenes
	(.tscn files)
scripts
	(.gd files)
shaders
```

What winds up happening is the scripts wind up in the scenes folder and we wind up refactoring eventually which can get messy.

## An alternative
I suggest a scene oriented approach instead:

```
addons
	(third party godot stuff)
vendor
	(third party generic stuff [like kenney assets or something])
models
	(some_model)
		(model.blend)
		textures
			(model_albedo.png)
			(model_normal.png)
			(model_roughness.png)
music
sfx
textures
resources
	(resource_type.gd)
	(resource_type)
		(some_resource.tres)
scenes
	(example_scene_folder)
		(example.tscn)
		(example.gd)
		(inherited_scene)
			(inherited_example.tscn)
			(inherited_example.gd)
		(sub_scene [as in, a scene only used in example_scene]) 
			(sub_scene.tscn)
			(sub_scene.gd)
singletons
	(global.gd)
types
	(non_resource_type.gd)
shaders
```

The goal here is to take advantage of godot's default script placement (in the folder of the screen it's being instantiated in), so that its default will place it with the scene it's related to. Additionally, this'll mean scenes with a lot of scripts specific to it will be placed in its scene folder, which will contain its messiness.