# Summary
**WIP** This probably still needs some trimming, but it's the plan so far!

Grimmwar is a story building card game, mix and match story cards and build a story of a battle between your deck and your opponents.
![[Screenshot 2024-12-12 22-57-50-823.jpg]]
![[mock-grimmwar.png]]
## Card Deck Jam
This game was designed for the first [Card Deck Jam](https://itch.io/jam/card-deck-jam) The theme is **Building**, and I've decided to use in the following ways
- Story Building
- Deck Building
# Gameplay
Largely inspired by Magic the Gathering and YuGiOh, players take turns playing cards of varying types to build a story of their victory. 
## Rules
0. Terminology
	1. **Epic**: The story being written of the battle being played. It's displayed in the center of the screen, and players can scroll through it at any time.
	2. **Grimoire**: The player's "deck" consisting of some amount of cards
		- **TODO: Figure out deck size**
2. General
	1. Players draw 5 cards to their hand and the beginning of the game
	2. Turn order is determined by the flip of a coin
	3. At the beginning of a player's turn, they draw a card.
	4. On their turn a player may play any amount of cards, provided the card can be played.
3. Card
	1. Cards act as a part of the story, when played they add a line to the epic.
	2. Cards have the following parameters
		1. Name
		2. Type
		3. Triggers
	3. Types
		1. Character
			1. When played, Characters spawn a unit on the battlefield.
		2. Location
			1. Locations change the visual look of the battlefield, as well as have triggers of their own.
			2. Only one Trigger may be active at a time
		3. Action
			1. Actions have immediate effects, and are only played on the player's turn
		4. Twist
			1. Twists operate as traps, they always have a triggered effect, but the opponent isn't able to see what it is.

# Sets
## Basic
These cards can show up in any pack, to fluff them up
### Characters

| Name           | Type   | Health | Attack | Effect                              |
| -------------- | ------ | ------ | ------ | ----------------------------------- |
| Mary Sue       | Adult  | 4      | 1      |                                     |
| Mary Stu       | Adult  | 4      | 1      |                                     |
| Red Herring    | Animal | 1      | 1      |                                     |
| Main Character | Adult  | 3      | 2      | Attack + 1 when with Side Kick      |
| Side Kick      | Adult  | 2      | 3      | Health + 1 when with main character |

### Locations
### Actions

| Name             | Effect                                 |
| ---------------- | -------------------------------------- |
| Active Voice     | Target Character, +1 Attack            |
| Passive Voice    | Target Character, -1 Attack            |
| Tragic Backstory | Target Character, -2 Health, +3 Attack |
| Exposition       | Target Character +2 Health             |
| Flashback        | Repeat the last card                   |
| Foreshadowing    | Target Character - 2 health in 2 turns |
| Info Dump        | +1 Health to All Friendly Characters   |
|                  |                                        |

### Twists

| Name            | Effect                                               |
| --------------- | ---------------------------------------------------- |
| Cliffhanger     | On Character felled, prevent it, leaving it with 1HP |
| Deus Ex Machina | On Player felled, prevent it, leaving it with 1HP    |
| Proofread       | On Character healed, prevent it                      |
| Writer's Block  | On Card played, prevent it                           |


## Hansel and Gretel
### Characters

| Name               | Type   | Health | Attack | Effect                                       |
| ------------------ | ------ | ------ | ------ | -------------------------------------------- |
| Hansel             | Child  | 3      | 2      | When Paired with Gretel + 1 Attack           |
| Gretel             | Child  | 3      | 2      | When Paired with Hansel + 1 Attack           |
| Kind Old Woman     | Elder  | 3      | 1      | After 2 Turns, transform into Cannibal Witch |
| Cannibal Witch     | Witch  | 6      | 3      | +2 Attack against Child Characters           |
| White Duck         | Animal | 2      | 1      |                                              |
| Poor Woodcutter    | Adult  | 4      | 1      |                                              |
| Selfish Stepmother | Adult  | 4      | 1      | +1 Attack against Child Character            |
| Hungry Crows       | Animal | 1      | 1      |                                              |
### Locations

| Name           | Effect                                      |
| -------------- | ------------------------------------------- |
| Edible Cottage | Heal Child Characters 1 Every turn          |
| Forest         | On Play, Flip Coin, All Children - 1 Health |
| Home           | On Play, All Children, Health +1            |
### Actions

| Name                  | Effect                                 |
| --------------------- | -------------------------------------- |
| Into the Oven         | Fell a Character                       |
| Abandon in the Forest | Flip Coin, play Location Forest        |
| Leave a Trail         | Return to the last location            |
| Feed the Guests       | Target Character, Health +3, Attack -2 |
### Twist

| Name              | Effect                          |
| ----------------- | ------------------------------- |
| Lock the Door     | On Location played, prevent it. |
| Clever Deception  | On Target Character, prevent it |
| Overhear the Plan | On Action, prevent it           |

## The Elves and The Shoemaker
### Characters

| Name   | Type  | Health | Attack | Effect |
| ------ | ----- | ------ | ------ | ------ |
### Locations

| Name              | Trigger                         |
| ----------------- | ------------------------------- |
### Actions

| Name              | Trigger                         |
| ----------------- | ------------------------------- |
### Twist

| Name              | Trigger                         |
| ----------------- | ------------------------------- |
