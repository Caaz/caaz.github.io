---
title: Ideation
summary: What do I want in a mystery dungeon game, exactly?
draft: true
date: 2025-08-18T14:37:20
lastmod: 2025-08-20T18:32:11
---
I want to make a mystery dungeon game.

## Core Features
### Turn Based
In most games in the Genre, every action is turn based, after the player takes their action, the rest of the entities in the floor also take their action.

I'd like to instead implement a system where actions take a certain amount of time. For example:
- A basic attack takes 1 tick
- Movement takes 1 tick
- A Super strong attack may have a wind up of 2 ticks, then used at the end
A player seeing a strong attack coming might be able to move out of the way.
### Randomly Generated Dungeons
Most Mystery Dungeon games I've played have dungeon layouts that are more similar to rogue. Long hallways connecting various rooms with an exit somewhere.

I would instead like to create a Spelunky inspired dungeon generator. 
1. Create a path from the player's entry to the exit
2. Create paths off of those to fill the remaining area (usually forming a box)
3. Using these paths, we should have 16 types of rooms to connect everything, each of those having a set of "tiles" that reflect the room that will be placed down. 
### Items
I like items, and I feel like them taking an entire turn can feel bad, especially when the effect isn't that great. Item usage should be 1 tick.
### Map
I think the map system found in most mystery dungeon games is applicable and fine to use here.
### Tile based Movement
Many Mystery Dungeon games feature diagonal movement. I really don't like diagonal movement however, I think it adds a weird complexity to the game that really doesn't need to be there. The biggest thing that hurts in my brain is that diagonal movement takes less time than moving up and to the side. Diagonal attacks are fine though.
