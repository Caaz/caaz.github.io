---
title: Node and Scene References
date: 2024-12-22
draft: false
summary: Node and scene references in Godot scripts can be referenced using various methods, but some should be avoided due to potential issues with scene restructuring or node name changes.
---
Like all programming problems, referencing a node or scene in a Godot script can be done in many ways. I've found that some of these ways can raise issues during development that can cause problems, and should probably be avoided because of it.

```
# via find_child
@onready var some_node = find_child("SomeNode")
# via $Name
@onready var some_node = $SomeNode
# via unique name
@onready var some_node = %SomeNode
# via export
@export var some_node:Node
```

The first two suffer from an annoying issue, if we happen to restructure the scene's tree, and move `SomeNode` to a child of a different node, the script breaks, and we have to go in and modify the script to resolve it.

The third option is safe from that problem of course, but it runs into a different issue: If you happen to change that node's name, it once again breaks our script causing us to refactor again.

The fourth however, an exported variable, I believe is the best solution, it's immune from both of the previous issues, as Godot will track when the name or location of the node changes. Additionally, it forces us to properly type hint the node.

Scene references have less options for referencing them, but again, I'd avoid hard-coding the path for scenes in a script, as again, moving that file around will break that script. An exported variable instead work well to avoid that.

```
@export var some_scene:PackedScene
```

## Caveats

### Circular Dependencies
Circular Dependencies can happen with the exported variable approach for scenes specifically. If for example, you have scene_a with an exported variable to scene_b, then have scene_b with an exported variable to scene_a, neither scene will be loadable by the Godot editor.

This issue is difficult to notice, as you can set it up in the editor, and while the project is in memory, it's fine. The error only arises when loading the scene into memory. Regularly reloading the project on git merges is a good practice to avoid one of these slipping by.

In these scenarios, it might actually be easier to hard-code the scene locations, perhaps in a global autoload script, as at least then if it breaks a script, it'll only break one script.