---
title: Resolving Git Conflicts
date: 2024-12-22T21:36:30
draft: false
summary: When using Git with Godot projects, conflicts can arise during merges or pulls due to changes made to scene files (.tscn) and external resources. This document provides guidance on resolving these conflicts.
lastmod: 2025-11-23T19:54:43
---
## Summary

> Heads Up! This was written with Godot 4.3 In mind! UIDs have had a major change, and some of this information might be out of date!

When using git, Godot scenes (.tscn) files tend to conflict very easily, any new node or resource added to the scene will modify the first line of the scene file:
```
[gd_scene load_steps=5 format=3 uid="uid://bdldxaka32a6w"]
```
Typically the difference is `load_steps`, looking into this, it's simply a counter Godot uses to render a loading screen. those steps is the count of resources it needs to load into memory. It appears that Godot will recalculate this value on saving the scene, so whichever half of the conflict is chosen doesn't seem to matter.

## External resource conflicts
External Resource conflicts are the more messy problem. External resources are defined in scenes like so:
```
[ext_resource type="Script" path="res://scripts/main_menu.gd" id="1_427ti"]
```
Each external resource has a path and an id, the id is used to reference that resource throughout the scene, like so:
```
script = ExtResource("1_427ti")
```

In the event that Godot returns a "missing resource" error and the resource *is* defined in the scene, it's likely that we've got a circular dependency. 