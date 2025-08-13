---
title: MageLoop
summary: A game created for GMTK Game Jam 2025. This document goes over the future plans for development.
draft: false
date: 2025-08-12T21:13:08
lastmod: 2025-08-13T01:23:04
---
## Summary
MageLoop was a *mildly* successful game made for the GMTK Game Jam 2025. If you want to know how that went, read the [[retrospective]] about it! This document will go over the future plans for the game based on the feedback I received.

## Jam feedback
### Difficulty
Many players agreed that the difficulty was too high. This was *somewhat* intentional, because I wanted it to be a score-building challenge, but the difficulty likely ramped up far too quickly.

- More enemy variety. Early enemies could be simpler, slower, easier to deal with, less health, etc.
- Giving the player an idea of where off-screen enemies would be could help warn the player when enemies are spawning.
	- "From Space" had this issue, I should look into how that designed around it.
- Making the arena more friendly for avoiding enemies might help
- Making enemies path to something other than the player might help

### Projectile accuracy
Even when the player successfully targeted an enemy, this didn't guarantee a hit. That can be frustrating for faster moving enemies.

- Projectiles could be sped up
- Projectiles could be hitscan
	- This would work well with the cowboy idea and rename of "Quickdraw"
- Enemies could be slower
- Projectiles could home in on enemies
	- This would work well with the mage theme

### Lag
When too many enemies spawned in, the game had a horrible performance drop. This was a known issue at the time and one I didn't spend any time trying to resolve, but I've got something in mind

- Replace enemy pathing with vector fields
	- This only really works if there's only one target though.... unless I set up multiple fields.

### Drawing the loop
Some players mentioned drawing the loop while moving was difficult. I *think* this is only an issue if you're trying to be accurate with the loop, which isn't really intended. The reason a player may want to be accurate is because it breaks when hitting enemies, which was also a complaint by many players.

I want the player to scribble circles as fast as possible and feel a sense of power throwing out attacks.

- Making the camera fixed could make drawing easier
	- This would require an arena that fills the entire screen and nothing more, which might solve some difficulty issue as well.
- Making the loop only destroyed by telegraphed enemy attacks would be clearer
- Making the hitbox of both enemies and the loop would help the player know how to draw the loop without breaking it

## Personal thoughts

### Art
Because I used pre-existing assets for the game, it feels a bit generic to me and I'd like to move away from that. I'd like to give the game an overhaul that gives some meaning to the gameplay. I need to answer some questions about gameplay, that will hopefully lead to a more concrete understanding about what I want to do with the game.

- Who is the player?
- What is the goal?
- What kind of enemies do I want to have? 
	- What attacks do they need to have?
	- How do they spawn in?
	- Why are they a threat to the player?
- What is the arena?
	- Why is the player here?
	- Why are the enemies here?