---
title: Godscrown
summary: A game created for the Cosmic Horrors Jam IV!
draft: false
date: 2025-10-08T18:12:49
lastmod: 2025-10-21T09:24:01
---
![[title.png]]
This game is for the [Cosmic Horrors Jam IV](https://itch.io/jam/cosmichorrorsjam4)! I'm writing this before the jam starts as I've already got an idea in mind that should be easy to develop, and let me flex some art skills along the way.
<iframe frameborder="0" src="https://itch.io/embed-upload/15295129?color=070707" allowfullscreen="" width="640" height="380"><a href="https://caaz.itch.io/godscrown">Play Godscrown on itch.io</a></iframe>

## The Plan
I'd like to create a game heavily inspired by [Happy Little Dinosaurs](https://unstablegames.com/collections/happy-little-dinosaurs/products/happy-little-dinosaurs-base-game), a very simple boardgame where you take your dinosaur character from one end of the board to the other, each turn facing a different disaster, and you use items to hopefully escape. I'll do some research on [[game-dives/happy-little-dinosaurs/index|Happy Little Dinosaurs, found here]]. Then I'll lay out how this game rethemes it and differs.

### Retheming
Disasters are **Horrors**, each a style of horror found in the cosmic horror genre.

Player characters are human, each representing a character within your typical film-noir story

Point cards and instant cards will be joined as **Action Cards**. An action card will have effects that can trigger in your hand, when played, during ties, etc.

### How this differs
This game borrows a lot of mechanics and twists some others, but is it enough to be its own game? Maybe. Here's a quick chart

| Feature                  | Happy Little Dinosaurs | Godcrown |
| ------------------------ | ---------------------- | -------- |
| Board + Pieces           | Yes                    | No       |
| Point Cards              | Yes                    | Yes      |
| Disaster Cards           | Yes                    | Yes      |
| Point Effect Cards       | Yes                    | Yes*     |
| Multiple Winning Players | Yes                    | No       |
| Story                    | No                     | Yes      |
| Unlockable Characters    | No*                    | Yes?     |
#### Point Effect Cards
In Happy Little Dinosaurs, there's a limited amount of effects one can do in paper. Since Godscrown is digital, we can do much weirder and more complicated things since the game can figure out the mechanics for us! Growth for example would be impractical in HLD. Reversal would be confusing, but not impossible.
#### Unlockable Characters
I fully expect some characters to be unlockable through the story. HLD *does* have extra characters, but they're expansions and I'd equate that more to DLC.
## Rules
### Keybinds

| Action                    | Keybind                  |
| ------------------------- | ------------------------ |
| Skip Intro, Skip Tutorial | Space, Left Mouse Button |
| Pause                     | Escape, P                |
| Select Card               | Left Mouse Button        |


### Starting the Game
At the beginning of the game, each player chooses a role. Draws three cards.

#### Turns
At the beginning of the turn a horror card is revealed and each player chooses an Action Card from their hand. Once all players have chosen their card, they're revealed simultaneously. The player with the lowest score loses the round, and collects the current horror card.

##### Ties
If more than one player has the lowest score for a round, then a tiebreaker round starts. The tying players play a turn to break the tie, and repeat until the tie is broken.
### Horrors
Horrors are *usually* one of three types: Arcane, Anomaly, Monstrosity. Each type has an icon and color associated with it. If a player collects 3 of the same horror, they lose the game.
##### Cosmic Horrors
Cosmic horrors are horror cards that count as *all* types. Collecting a cosmic horror adds to all three type counters.
### Roles
#### Biases
Some roles have biases, which means when facing certain horrors, their action cards can be worth more or less depending on the bias, indicated by the arrows in their character box.
#### Action Deck
Each role has their own unique Action deck, which is 7 action cards with varying point values and effects. Certain effects are only active during specific points of gameplay, it's important to use them at the right time!
### Action Cards
Action cards have a point value, and sometimes an effect. 
#### Effects

| Name      | Effect                                                                           |
| --------- | -------------------------------------------------------------------------------- |
| Growth    | Each turn the card is in your hand, an amount will be added to the card's value. |
| Refresh   | When played, discards your entire hand and draws 3 new ones.                     |
| Stack     | When played, allows you to play a second card to add to the card's value.        |
| Critical  | When played vs a specific horror type, a bonus is added to the card's value      |
| Breaker   | When played during a tiebreaker, a bonus is added to the card's value            |

## Content
### Horrors
![[horrors.png]]
- Arcane (Knowledge based) Blue
- Anomaly (Reality based) Purple
- Monstrosity (Creature based) Red
- Cosmic (All Types) Gray

| Art | Type        | Name                | Note                                                     |
| --- | ----------- | ------------------- | -------------------------------------------------------- |
| Yes | Cosmic      | Star-Crowned King   | The skull on the card backs, but not skeletal.           |
|     | Cosmic      | Abyssal Queen       | Statue of Liberty, as an eldritch horror, still massive. |
| Yes | Arcane      | Maddening Device    | A touch screen phone, in the 1930s?                      |
| Yes | Arcane      | The Truth           | A big door, callback to full metal alchemist             |
| Yes | Arcane      | Impossible Equation | Just, literally the quadratic formula                    |
|     | Arcane      | Strange tablet      | Triangular tablet with glyphs on it                      |
|     | Arcane      | Sapphire Safe       | A source of ancient knowledge, in an unassuming bank.    |
|     | Arcane      | Experiment 23       | A living creature within a jar                           |
| Yes | Anomaly     | Eternal Twilight    | Eyeball in the night sky                                 |
| Yes | Anomaly     | Spatial Spirits     | A mysterious cocktail drink                              |
| Yes | Anomaly     | Slice of Life       | A person, a slice of a person, still living              |
|     | Anomaly     | Ouroboros Rail      | A train with no destination, no stop, and no start       |
|     | Anomaly     | Obsidian Vault      | A portal to unimaginable worlds, that calls people in    |
|     | Anomaly     | Times Square        | A point in space where multiple timelines converge       |
| Yes | Monstrosity | Grasping Smog       | Smoke rising from a vent causing people to go insane     |
| Yes | Monstrosity | The Birds           | Pigeons with too many eyes                               |
| Yes | Monstrosity | Pizzamalgam         | Pizza rat, but more tentacles                            |
|     | Monstrosity | Ruby Gargoyle       | A gargoyle with red gemstone eyes                        |
|     | Monstrosity | Living Vat          | A vat of chemicals brought to life                       |
|     | Monstrosity | Voidhoppers         | Living shadows reach out to take their hosts             |


### Roles
![[portriats.png]]

| Matrix       | +Anomaly       | +Monstrosity | +Arcane   |
| ------------ | -------------- | ------------ | --------- |
| -Anomaly     | Femme Fatale   | Detective    | Bartender |
| -Monstrosity | Fortune Teller | Ironworker   | Scientist |
| -Arcane      | Cultist        | Mob Boss     |           |
**Ending story**
The first slide of the ending should be shared by all characters, saving me time and effort

| The deck of horrors glows on the table, three bodies are seen lying on the floor around it. The ROLE watches, a tendril reaches out. | With the last card played the game ends. Your wish, ROLE, shall be granted. |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
#### Detective
- Unlocks: **Mob Boss** (Turns into them)
- Wish: For no one to lie to them again.
- Result: The Star Crowned King gives them power, makes everyone fearful of them, and the detective becomes an eldritch mob boss. Monstrous underlings do his bidding

| Art                                                                                                               | Narrative                                                                                             |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| The detective writhes in pain at the table, suit starting to rip, the three bodies around the table start to glow | Power floods through your veins, fear becomes a currency. No soul will be brave enough to lie to you. |
| The Mob Boss stands at the top of a building looking down at the city, eldritch minions stand beside him          | All who cross you shiver. The city obeys your every command.<br><br>Mob Boss unlocked                 |

#### Scientist
- Unlocks: **Fortune Teller** (Turns into them)
- Wish: To know everything.
- Results: The Star Crowned King bestows upon them knowledge of all that has been, will be, and things that can never be. Her arcane knowledge is instead replaced with anomalous knowledge, turning her into the Fortune Teller

| Art                                                                                                                                                             | Narrative                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| The scientist looks at the camera, eyes glowing, a tendril reaches from above and a swirl of eldritch knowledge rises up from the ground and surrounds her head | The Star Crowned King bestows upon you the knowledge of all that has been, will be, and all that can never be. |
| Eyes still glowing, the fortune teller now ponders an orb, with eldritch runes inside it                                                                        | Knowledge beyond time now guides your destiny. <br><br>Fortune Teller unlocked.                                |

#### Cultist
- Unlocks: **Librarian** (Turns into them)
- Wish: To please the Star Crowned King
- Results: The Star Crowned King would be happiest if this cultist simply didn't know of them at all. With their mind wiped, they become the librarian.

| Art                                                                       | Narrative                                                                                                                      |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| The cultist sits with a glass in front of him                             | The Star-Crowned King bestows upon you a transformative mixture that will grant you charisma unbound                           |
| The Bartender places the glass down, emptied, the background is now a bar | A sip is all it takes to bend the willpower of all before you. Every heart opens before your words.<br><br>Bartender unlocked. |

#### Ironworker
- Unlocks: **Femme Fatale** (Revived by the star crowned king)
- Wish: To bring back someone who died in a construction accident
- Results: The Star Crowned King brings her back, but not as she was.

| Art                                                                                     | Narrative                                                                                                                   |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| The Ironworker pleads with the deck, crying                                             | The Star‑Crowned King can bring back what was lost, but never as it was                                                     |
| A pale woman stands upon a construction site, claw marks on the steel where her hand is | Your wife returns returns to the living, but not as she was, something new, something better.<br><br>Femme Fatale unlocked. |


## Technical
```mermaid
flowchart TD
menu[Main Menu]
start_game[Each player chooses a role]
start_turn[Each player chooses an action card in their hand, and draw to replace it]
scoring[Each player reveals their chosen card, and compares the score]

tie[Tied players choose another card in their hand, and draw to replace it]

loser_found[The player with the lowest score keeps the horror card, if they have 3 horrors of the same type, they're removed from the game.]

winner_found[The last remaining player is declared the winner]

menu -- start --> start_game
start_game --> start_turn
start_turn --> scoring

scoring -- players have tied for last --> tie
tie -- repeat the turn with the tied players --> scoring

scoring -- a player has the lowest score --> loser_found
loser_found -- if there are 2 or more players remaining --> start_turn
loser_found -- if there is only one remaining player --> winner_found
```
