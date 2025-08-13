---
title: MageLoop Retrospective
summary: A quick retrospective about how this game did during the GMTK Game Jam 2025
draft: false
date: 2025-08-12T21:19:57
lastmod: 2025-08-12T22:07:01
---
## Summary
MageLoop was created for the [GMTK Game Jam 2025](https://itch.io/jam/gmtk-2025/rate/3776389).

The Jam was huge, as all GMTK Game Jams were, so I knew I wasn't shooting for success, but I *did* want to complete something. At the time, I was working a full time job and of course had a 3 month old child to attend to.
## Ideation
The game's theme was revealed as "Loop" and that was vague enough to think of plenty of options, but it wasn't until some discussion with another jammer that something similar to Pokemon Ranger's mechanics might be fun. We both set off with this idea and came out with two different types of games!
## The plan
I knew I wasn't going to have a lot of time to work on this, and so some rules were set:
- I'd need to use pre-made assets
- I should focus on gameplay

After setting those, I basically just knew I wanted enemies and a player. I figured the player should have some kind of ranged attack, and since I'm fond of wizard hats, a mage was decided on.
## The execution
My initial thought was to use Kenney Game Art assets. I browsed around and found the [creature mixer](https://kenney.itch.io/creature-mixer) tool to be useful for quickly making some enemies, and even the player

To ensure styles didn't clash too much, I looked into some of the pixel art tilesets Kenney offered. I brought in [Tiny Town](https://kenney.nl/assets/tiny-town) and [Tiny Dungeon](https://kenney.nl/assets/tiny-dungeon), but only really wound up using the latter. Something frustrating about these tilesets is that they don't autotile nicely in godot. Some trickery could be done using autotiles maybe, but what I had to do was bring it into aseprite and start adjusting *many* tiles to get a nice autotile setup. This took a bit of time, but not too bad.

## The results
|Criteria|Rank|Score*|Raw Score|
|---|---|---|---|
|[Audio](https://itch.io/jam/gmtk-2025/results/audio)|#2350|3.139|3.139|
|[Artwork](https://itch.io/jam/gmtk-2025/results/artwork)|#3017|3.278|3.278|
|[Creativity](https://itch.io/jam/gmtk-2025/results/creativity)|#3542|3.361|3.361|
|[Enjoyment](https://itch.io/jam/gmtk-2025/results/enjoyment)|#5415|2.528|2.528|
|[Narrative](https://itch.io/jam/gmtk-2025/results/narrative)|#5885|1.944|1.944|
## What could go better

### Testing!
By some miracle, there were no bugs. The difficulty however was much higher than most players appreciated. It would've helped a lot to have playtesters to ensure once this reached a wider audience, it was more approachable. There were some clear simple changes I could've made that would've driven the game in a better direction. There were a lot of feedback items given by players
- Reduce difficulty
- Projectiles aren't guaranteed to hit
- Enemy variety is lacking
- Spawnrate is crazy
- Lag after too many enemies
- Trying to draw while moving is difficult
- Enemies hitting the line is frustrating
	- "I want to just spam circles!"
### Planning
I didn't spend too much time planning. In some ways this was a blessing, can't have scope creep if I don't even know what I'm doing. On the other hand, I didn't really know where I was supposed to stop. I wound up submitting my game a day early, because I didn't have an idea of what else to do. I should've used that time to playtest!
## Credits

| Name             | Credit                                                                   |
| ---------------- | ------------------------------------------------------------------------ |
| Kenney           | [Art Assets](https://kenney.nl/)                                         |
| Background Music | [Arcade Music Loop.wav by joshuaempyre](https://freesound.org/s/391660/) |
| Pojectile sound  | [projectile.wav by jeckkech](https://freesound.org/s/251461/)            |
