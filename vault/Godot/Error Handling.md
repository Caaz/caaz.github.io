Godot doesn't have traditional error handling, so we should use [defensive programming](https://en.wikipedia.org/wiki/Defensive_programming) practices to ensure our games don't explode on users.

# Return Early
> If it can't be done, do nothing.

One of the easiest ways to apply defensive programming in godot is to [return early](https://medium.com/swlh/return-early-pattern-3d18a41bba8) on invalid states. The basic idea is that the reader of our code mostly cares about the "happy path". This breaks most functions down into two parts: "Check invalid states", "Do what the function is named for"

For example, let's take a look at this load_level function. 
```
func load_level(index:int) -> void:
	# Check invalid sates
	if levels.size() < index:
		printerr("Invalid level index: {0}".format(index))
		return
		
	if not is_instance_valid(game_node):
		return
	
	# Do the thing
	for child in game_node.get_children():
		child.queue_free()
	
	var level = levels[index].instantiate()
	game_node.add_child(level)
	hide()
```
It needs to grab a scene from a levels array, instantiate it, and add it as a child to another node. This means we need to check two things:
- Is the level index we're trying to add even valid?
- Is the node we intend on placing our level a valid node?

If those two succeed, we know we can go on with our process and we're reasonably certain that the function should succeed. If either fail, the function simply does nothing. If we wanted, in the future we could check that if you're loading an already loaded level, it'd also do nothing. This would make the method idempotent. 

## Caveats
### Non-void functions
Returning early really only works for void functions, as functions that return a typed value shouldn't just return void all of a sudden. If we expect an integer, it should return an integer. 

In Godot, there are functions that explicitly return a value, and error when they cannot. For example, raycasts:
```
if raycast.is_colliding():
	var point = raycast.get_collision_point()
```
if you were to call `get_collision_point` without `is_colliding == true`, then it'd raise an error, this leaves it up to the implementer to only call the method when it can be called.