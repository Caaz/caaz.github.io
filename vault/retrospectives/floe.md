---
title: FLOE
date: 2024-12-22
draft: false
summary: "Floe was an ice skating platformer game created for SpeedJam #8, where players could perform tricks to gain speed. The game ranked #7 out of 104 entries, but the team faced challenges in its development process, including inefficient scene management and difficulties with LootLocker's API."
---
## Summary
https://pontax.itch.io/floe
Floe was a game created for [SpeedJam #8](https://itch.io/jam/speedjam8). 
The Jam's primary audience was speedrunners, so going in we knew we were going to need time tracking, quick resets, and level selects. Since Lootlocker is a sponsor of the jam, we also looked into implementing their leaderboard script into our project to use that service. The Jam ran from November 29th 2024 at 12:00 PM to December 2nd 2024 at 12:00 PM. 
## Ideation
When the game stared the theme was revealed, **Flow**. From that we were immediately thinking of "Flow State" like one might get into while doing tricks on a skateboard, or other sports. Rhythm games were thought of as well. We were spitball many ideas via [Miro](https://miro.com/index/).
It took a few hours but we started running with the idea of running from a volcano and lava while doing tricks to gain speed. Linguistically this almost made sense, but as we started work we realized lava flowing is fairly slow, and if the player is going fast, it's not really a problem anyway. It doesn't fit the "Speedrunner" playstyle, and why the player would be doing tricks didn't make sense either. We quickly pivoted and reorganized to pull back in a previous idea, ice skating.
## The plan
We would make an ice skating platformer game. By the end of the first day, we had a "testbed" level set up (which would later become Level 2) and a decent idea of what movement techniques we wanted the player to have. Wall kicks, jumps, acceleration and turning
At this point, we were still trying to figure out how to tie in "tricks" to gain the player speed, and were trying to implement a "Dance Dance Revolution" minigame any time the player jumped to give them a boost, but we very quickly realized that it would require quite a bit of effort to implement that, and be very difficult to pull off for the player. We simplified it to a single button press in the air, which became a meter draining ability.
## The execution
I worked during the days, while ArturGinRad worked during the nights, We did our best to track our work through Jira, but due to the short time of the jam, there wasn't a lot of time to check it or to update it, the benefit of jira was easily outweighed by the time it took to use it.
Much of Sunday I spent cleaning up the codebase and trying to make it more reusable, object-oriented, and it was those changes that inspired me to start these notes.
By the time I had run out of steam, there were still problems with the game, the last level's parallax wasn't set up properly, the leaderboard functionality didn't work, and the flow meter wasn't using the art we had done, which was intended to use some fancy shader tricks.
## The results
We ranked #7 out of 104 entries.

| Criteria                                                                     | Rank | Score* | Raw Score |
| ---------------------------------------------------------------------------- | ---- | ------ | --------- |
| [ScoreSpace Choice](https://itch.io/jam/speedjam8/results/scorespace-choice) | #1   | _n/a_  | _n/a_     |
| [Gameplay](https://itch.io/jam/speedjam8/results/gameplay)                   | #4   | 3.850  | 3.850     |
| [Sound](https://itch.io/jam/speedjam8/results/sound)                         | #6   | 3.650  | 3.650     |
| Overall                                                                      | #7   | 3.650  | 3.650     |
| [Theme](https://itch.io/jam/speedjam8/results/theme)                         | #15  | 3.500  | 3.500     |
| [Aesthetics](https://itch.io/jam/speedjam8/results/aesthetics)               | #16  | 3.600  | 3.600     |

## What could go better
>It should be noted that everything here isn't on any one person, and part of a game jam is to learn how to do better. Retrospectives are an effort to not repeat the past, and learn from them. I think everyone did amazing, given the time constraints, and we got a pretty good score as well!
### Research
I'm not sure any of us really had a good idea of speedrunning going into this jam, we had wildly different ideas of what to build for this, I think we kind of just picked something and ran. It probably would've helped to step back a bit and really dig into some of the best speedrunning games.
### Reusable Scenes
One of the things I feel we could've done better is a usage of reusable scenes, as every level was a copied scene, the elements within it, the player, camera, end flag, tilemaps, were all copied and pasted, so if there were a bug in one, we'd have to make the same change across every level to resolve it. This was a huge problem regarding efficiency not only programming and architecture wise, but just in development time.
### Tileset utilization
Tilemaps didn't use autotiling features, and I think that would've sped up level design greatly, and I believe the only current warnings/errors in the game comes from the tilesets or tilemaps.
### UI Configuration
The use of Control nodes had to regularly be reorganized to scale nicely, and due to that the scripts kept breaking [[node-and-scene-references]] was written after the jam to ensure I can avoid this problem in the future. A document should be written covering Control node layouts as well, so that we don't manually lay out everything going forward as well. A theme was also not set, requiring every button, font, padding, to be set manually.
### LootLocker's script
The script LootLocker provides is very long, not very configurable, and completely ignores design practices I think I would expect an API provider to provide, like a client. Integrating it into our project required manually editing a large script, and it's because of that, I couldn't quickly tell what was our changes or what was part of the example.
Going forward, it'd be best if we had an easy-to-use API client that we could make a small script to integrate with. Plenty of godot addons work in this way, it was strange to me that LootLocker didn't provide something like that.
### Personal
Priorities weren't there for me, this was too short a jam that demanded too much of my attention and time to make it worth it. It's because of this that I had to really think about what motivates me and what I want to work on going forward. 
## Floe credits
Music & Audio - [Jaden Eubanks](https://jaden-eubanks.itch.io/)
Gameplay programmer & Technical developer -  [Caaz](https://caaz.itch.io/) (That's me!)
Gameplay programmer & Technical developer -  [ArturGinRad](https://artur-gin.itch.io/)  
Art & Animation - [Pontax](https://pontax.itch.io/)