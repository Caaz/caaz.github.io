---
title: Havoc
summary: An arcade destruction game. Players take on the role of a kaiju and attack cities in a fully destructible environment.
draft: false
date: 2025-01-05T19:09:35
lastmod: 2025-01-19T16:31:51
---
## Summary
Havoc is an arcade destruction game. Players take on the role of a kaiju and attack cities in a fully destructible environment.
## Game Design
**Havoc** combines the action of **Rampage** with the environmental detail of **Terraria**, players will be tasked with destroying a certain percentage of the city, and the faster they do so the more points they get. During the level, 
### Inspirations

- Rampage
	- Kaiju player
	- City levels
	- Unlockable characters
- Terraria
	- Destructable Environments
	- Small tile sizes
- Smash Bros. Series
	- Unique character movesets and mobility
- Street Fighter Car Smash
	- Player vs Environment chaos
### Environment
The levels will be tile based, the player's character will be some multiple of the tile size, this should give the player a good sense of scale, NPC characters will be one tile tall.  This is intended to give the player a sense of scale.
## User Interface
```mermaid
---
title: User Interface
---
flowchart TB
	title(Title)
	main_menu(Main Menu)
	character_select(Character Select)
	gameplay(Gameplay)
	load_menu(Load Menu)
	credits(Credits)
	settings(Settings Menu)
	
	title --> main_menu
	
	main_menu -- New Game --> character_select
	character_select --> gameplay
	
	main_menu -- Load Game --> load_menu
	load_menu -- Select a save file --> gameplay
	
	main_menu --> credits
	gameplay --> credits

	main_menu --> settings
	settings --> main_menu
```
## Questions
**How does this differ from just playing Rampage?**
Smash-like control scheme, more maneuverability and destruction of environment.

*If I had the IP, I would make this a Rampage sequel.*