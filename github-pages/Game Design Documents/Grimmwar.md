# Summary
**WIP** I got too tired! I must sleep!

Grimmwar is a story building card game, mix and match story cards and build a story of a battle between your deck and your opponents.
![[mock-grimmwar.png]]
## Card Deck Jam
This game was designed for the first [Card Deck Jam](https://itch.io/jam/card-deck-jam) The theme is **Building**, and I've decided to use in the following ways
- Story Building
- Deck Building
# Gameplay
Largely inspired by Magic the Gathering and YuGiOh, players take turns playing cards of varying types to build a story of their victory. 
## UI
## Card Types
- Character
	- Has a type
	- Has the following stats:
		- Health
		- Attack
	- When played, spawns an entity on the battlefield
- Location
	- Affects the visual style of the arena
	- Only one can be active at a time
	- May have triggers
- Action
- Twist

# Sets
## Hansel and Gretel
### Characters

| Name               | Type   | Health | Attack | Trigger                                      |
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

| Name              | Trigger                         |
| ----------------- | ------------------------------- |
| Lock the Door     | On Location played, prevent it. |
| Clever Deception  | On Target Character, prevent it |
| Overhear the Plan | On Action, prevent it           |

## The Elves and The Shoemaker
### Characters

| Name               | Type   | Health | Attack | Trigger                                      |
| ------------------ | ------ | ------ | ------ | -------------------------------------------- |
| Hansel             | Child  | 3      | 2      | When Paired with Gretel + 1 Attack           |
### Locations

| Name              | Trigger                         |
| ----------------- | ------------------------------- |
### Actions

| Name              | Trigger                         |
| ----------------- | ------------------------------- |
### Twist

| Name              | Trigger                         |
| ----------------- | ------------------------------- |
