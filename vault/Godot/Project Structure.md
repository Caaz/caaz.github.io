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
I suggest a scene oriented approach instead:


```
addons
	(third party stuff)
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
	(example_scene_folder)
		(example.tscn)
		(example.gd)
scripts
	(global_script.gd)
shaders
```

The goal here is to take advantage of godot's default script placement (in the folder of the screen it's being instantiated in), so that its default will place it with the scene it's related to. Additionally, this'll mean scenes with a lot of scripts specific to it will be placed in its scene folder, which will contain its messiness.

Another benefit, is it'll be very clear which scripts are actually in use and not just leftover from some deleted scene, as if we delete a scene, we'd delete its folder, and all scripts related to it.

Additionally, this makes art and audio top level, there's not a massive benefit to stuffing them into assets, they deserve to be first class citizens!

The scripts folder that does exist here will be specifically for global, autoload singleton scripts only.