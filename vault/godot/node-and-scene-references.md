---
title: Node and Scene References
date: 2024-12-22T21:39:16
draft: false
summary: Node and scene references in Godot scripts can be referenced using various methods, but some should be avoided due to potential issues with scene restructuring or node name changes.
lastmod: 2025-11-23T19:48:23
---
## Node References
Like all programming problems, referencing a node or scene in a Godot script can be done in many ways. I've found that some of these ways can raise issues during development that can cause problems, but which you use depends entirely on the nature of your project.

For example, if you're still in the process of restructuring things, choosing an option that doesn't break while moving nodes around is probably ideal. If you're still in the process of choosing proper names for your nodes, then the export option might be even better. (Something that may be the case during test scenes and such.)

| Option                       | Breaks on Rename | Breaks on Reorganizing | Developer Experience                                                                                                                                                                                                                                                                    |
| ---------------------------- | ---------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$Name`                      | Yes              | Yes                    | *Most* problematic, but most handy if you're just using it once for some odd thing... Risky, I suppose. Probably a bad habit to use often.                                                                                                                                              |
| `find_child("Name")`         | Yes              | No                     | Once you use it, you're stuck with that name. Can be good, can be annoying.                                                                                                                                                                                                             |
| `%Name`                      | Yes              | No                     | Functionally similar to the previous option, but now you have to set up % in your scene. I'm a little against this non-code UI option, it feels weird.                                                                                                                                  |
| `@export var some_node:Node` | No               | No                     | The most robust option, however... It can clutter the property inspector when including a scene that exports variables that *shouldn't* be changed by other scenes. If you're not careful, you can forget to set it as well, something a little less likely with more explicit options. |
## Scene References
Scenes have similar issues, but you're able to reference them in a variety of ways.

| Option                             | Breaks on Renaming | Breaks on Moving | Developer Experience                                                                                                                                                                                                 |
| ---------------------------------- | ------------------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `load("path/to/file.tscn")`        | Yes                | Yes              | *Most* problematic. Can cause issues for filesystems that are case sensitive, like web builds or linux builds.                                                                                                       |
| load("uid://someuidthing")         | No                 | No               | *Pretty good* but you can run into issues with circular dependencies if you're not careful.                                                                                                                          |
| @export var some_scene:PackedScene | No                 | No               | Functionally similar to the previous option, but with the added benefit of having a preview in editor. You might be able to pull off a read-only exported variable with the previous option to get a similar effect. |
