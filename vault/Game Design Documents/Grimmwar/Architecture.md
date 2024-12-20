This document describes the general architecture of Grimmwar. One of the most important design choices of this game is that I want to ensure the UI and visuals are separated from the inner logic and classes. This is so that in the future, post-jam, visuals can be adjusted greatly without breaking the core gameplay.
For ease of use, I'll consider these halves "backend" and "frontend"
# Backend
## Epic
Epic is the top level game object, it has the game's state, as well as historical states.
### State
States hold the players and which player is active, as well as pending effects that need to be resolved.
#### Player
Players hold the characters they've spawned, as well as the player's total health.
## Card
All card types inherit from Card, and Card holds the shared details between them, rules, title, etc.
### CardCharacter
Character cards use this class, and it holds specific information regarding characters: sprites, health, attack.
# Frontend
