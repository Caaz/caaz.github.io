---
title: Jame Gam 55
summary: A game created for the Jame Gam 55!
draft: false
date: 2025-11-16T21:03:33
lastmod: 2025-11-17T02:43:01
---
## The Plan
The theme of Jame Gam 55 is "Mobility" with a special object of "Gorge" This left pretty much everyone asking "what's a gorge" because mobility is kind of a given for *many* genres. The obvious answer is to navigate around/over/through/along a Gorge, I suppose, and after throwing a lot of ideas at the wall, one stood out. **Falling through a Gorge** Like a skydiving game, or the minigame from super monkey ball where you land on a target. This idea hit some hiccups when we thought of "Well what happens when  you land? Most gorges just have water at the bottom." Which lead to a mild evolution that you're not falling, you're *flying*. The player's character became a bird, one agile enough to do acrobatics to tick that **Mobility** theme.
## The Design
Play as an Osprey, fishing birds from a gorge. Dodge obstacles in your flight while capturing as many fish as possible. A little bit of an auto-runner, a little bit of a rails shoot-em-up, but all bird. Fish will act as power ups, giving the player abilities that may help them avoid obstacles, speed up to increase difficulty, or slow down to lower it.
## The Timeline
We have 7 days to tackle this, and here's what we should accomplish through each day:
1. **Basic Design Doc**, enough to work a prototype through
2. **Simple Prototype + Basic Itch Page**: Flying, Fish to catch, obstacles to dodge. Start Scene, Gameplay, End Scene (with an option to reset!)
3. **Refined Design Doc**. Figure out what works and what doesn't about the prototype, know what SFX we're missing, and refine the gameplay.
4. **SFX, Music, Menu Refinement** We should get the playable prototype much more friendly to players.
5. **Tutorial + Player Feedback**: Get some player feedback on what feels good and what feels bad, work on those changes to refine the gameplay.]
6. **Refined Gameplay, Itch Page, Bugtesting** Ideally this day should be spent searching for bugs and squashing them.
7. **Polish + Social Assets for Itch + Submission** With any luck, the only thing to do now is stretch goals if we've got em, and polishing what we have.

## Gameplay
### Fish (Powerups)
Fish should display a splash in the water when they're coming up, to give the player an idea of where to go. When the player gets close enough, they should jump out and the bird should swallow it.

| Fish    | Powerup                               |
| ------- | ------------------------------------- |
| Bass    | Drill Dash (break through obstacles?) |
| Salmon  | Speed Boost (temporarily?)            |
| Catfish | Slow Down (temporarily)               |
| Tilapia | Increased Handling (temporarily)      |

### Obstacles (Hazards)
Obstacles should show up through the run providing something for the player to dodge, if they fail to do so they reach a game over.

| Obstacle         | Description                                                                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Water Geyser     | Water shooting up from an underground fissure, temporarily making a vertical pillar of danger                                            |
| Rocks            | Various formations of rocks jutting out from the ground making low-flying difficult                                                      |
| Trees + Branches | Various trees and branches, logs that have fallen over creating tunnels for the player to fly under or through.                          |
| Caves            | Caves that can take the player along a more difficult to navigate path, but providing more fish for them to collect and no other hazards |
| Gorge Walls      | The walls of the gorge themselves will twist and turn through various paths, providing the player with a unique path each run.           |
| Waterfalls       | Waterfalls could provide a vertical pillar of danger that the player might be able to fly around.                                        |
