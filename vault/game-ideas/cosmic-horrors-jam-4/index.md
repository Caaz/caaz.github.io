---
title: Cosmic Horrors Jam IV
summary: A game created for the Cosmic Horrors Jam IV!
draft: false
date: 2025-10-08T18:12:49
lastmod: 2025-10-17T09:32:42
---
This game is for the [Cosmic Horrors Jam IV](https://itch.io/jam/cosmichorrorsjam4)! I'm writing this before the jam starts as I've already got an idea in mind that should be easy to develop, and let me flex some art skills along the way.

## The Plan
I'd like to create a game heavily inspired by [Happy Little Dinosaurs](https://unstablegames.com/collections/happy-little-dinosaurs/products/happy-little-dinosaurs-base-game), a very simple boardgame where you take your dinosaur character from one end of the board to the other, each turn facing a different disaster, and you use items to hopefully escape. I'll do some research on [[game-dives/happy-little-dinosaurs/index|Happy Little Dinosaurs, found here]]. Then I'll lay out how this game rethemes it and differs.

### Retheming
Disasters are **Horrors**, each a style of horror found in the cosmic horror genre.

Player characters are human, each representing a character within your typical film-noir story

Point cards and instant cards will be joined as **Action Cards**. An action card will have effects that can trigger in your hand, when played, during ties, etc.

## Rules

There are two decks, an Action Deck and a Horror Deck

The Action Deck contains 21 cards: a set of 7 point cards ranging from 1-7, 3 each.
The Horror Deck contains 20 cards: 
- 6 Arcane Horrors
- 6 Anomaly Horrors
- 6 Monstrosity Horrors
- 2 Cosmic Horrors (Which count as Arcane, Anomaly and Monstrosity)

There are three Roles players can choose from:
- Detective: +1 to Monstrosity Horrors, -1 to Anomaly Horrors
- Scientist: +1 to Arcane Horrors, -1 to Monstrosity Horrors
- Cultist: +1 to Anomaly Horrors, -1 to Arcane Horrors

At the beginning of the game, each player chooses a role and draws 3 cards.

At the beginning of a turn, a horror card is drawn from the horror deck and revealed to all players. Each player plays a card from their hand face down. Drawing a card to replace the card played. When all players have played their cards, they're flipped simultaneously, and the player with the lowest points takes the horror card.

Scoring: Each action card has a value associated with it ranging from 1-7, the player who played the card may also have a score adjustment based on their role. For example if a Detective is playing an action of 4 against a monstrosity horror, their total score is 5 due to the +1 to monstrosity detective has.

If two players tie for lowest score, they play a second card and score those as well. (Drawing to replace the card played as well). They repeat this step until the time is broken.

If any player collects 3 of the same type of horror, they lose the game.

To win, you must be the last player in the game.
## Content
### Horrors
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


### Characters

| Matrix       | +Anomaly | +Monstrosity | +Arcane   |
| ------------ | -------- | ------------ | --------- |
| -Anomaly     |          | Detective    | Librarian |
| -Monstrosity | Psychic  |              | Scientist |
| -Arcane      | Cultist  | Mob Boss     |           |
### Actions

Each role will have their own set of Actions, each which have a *value*, a *name*, and optionally an *effect*.
#### Effects

| Name     | Effect                                                                           |
| -------- | -------------------------------------------------------------------------------- |
| Growth   | Each turn the card is in your hand, an amount will be added to the card's value. |
| Refresh  | When played, discards your entire hand and draws 3 new ones.                     |
| Stack    | When played, allows you to play a second card to add to the card's value.        |
| Critical | When played vs a specific horror type, a bonus is added to the card's value      |
| Breaker  | When played during a tiebreaker, a bonus is added to the card's value            |


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
