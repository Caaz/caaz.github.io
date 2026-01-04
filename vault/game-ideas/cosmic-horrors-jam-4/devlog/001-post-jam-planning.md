---
title: Post-Jam Planning
summary: This update is the first after the jam, and is a massive re-write.
draft: false
date: 2025-11-07T21:34:26
lastmod: 2026-01-04T11:22:27
weight: "1"
---
After the Jam I took some time to think over the development of Godscrown, and review the responses I got to it. I'm *mostly focused* on the negative/constructive responses, as I feel there's more to learn from there.
## 1.0.0 (Jam Version) Feedback
Lets get started! So here are some excerpts from comments on the jam:
- [raoulscooter](https://itch.io/post/14664067): amazing game, i hope it will be expanded upon for **less luck based rounds**...
- [DeuxZeroNeuf](https://itch.io/post/14611053): ... Maybe just a quick thing, **when the tutorial box pop out, sometimes it appeared on other elements and/or doesn't contrast enough which the rest**, which end up make me skip it unintentionally x)
- [BennyBoy12306](https://itch.io/post/14600565): ... If you expand this **I think you should add more action cards because** right now the only thing that takes away from the experience is a lot of the time **you just pick the highest card available and hope the RNG is on your side**...
- [Leto du Plessis](Leto du Plessis): I like the cards that **add more longer term strategy to the gameplay**, such as the "analyze the evidence" card. I think **adding more cards that would synergize together in various ways** and that could create more **strategic opportunities** would really spice up the gameplay.

I think these few highlight some problems
1. **Not enough player agency**. Most of the time you just want to pick the highest scoring card, and if all your cards it can lead to "topdecking" which is simply hoping you draw a better card after a bad play and playing it immediately. Your hand is less a resource and just a stack of bad cards.
2. **Not enough synergy**. Many action cards have a singular focus and don't really care about the other cards in your hand, *except* for the **Stack** effect. Funnily enough, there's more anti-synergy in the game, like **Refresh** clearing your hand, potentially ruining a **Growth** card

Additionally, watching some players play live on Twitch or on Youtube revealed some additional problems!
1. The tutorial feature can be a bit overwhelming, especially if you *just* read the description on the game page.
2. Reversal isn't clear after the first tutorial prompt
3. Role bias effect isn't clear to the player. There's likely *too much* to keep track of.
4. The *results* screen isn't clear that it's just results, cards are still highlightable.
5. It's unclear what you're getting into by picking a particular role, knowing the decklist might help.
## Planned Changes for 1.1.0
The following changes *should* address some of the problems and bad-game-feel that players expressed from the jam version. Not all of them will come for 1.1.0, as there's a major milestone that will determine that.
### Larger Hand Size
**Confirmed for 1.1.0**
**Addresses**: Praying to the Luck God, Player Agency, *And Synergy*
A larger hand size (Let's go with... 5) should allow the player more options *and* allow the player to hold cards and not feel like they have to use them. You *may* still draw bad cards, but having 4 other cards should allow you to hold out for better cards longer, and having 5 bad cards should be *unlikely*
### Larger Decks
**Confirmed for 1.1.0**
**Addresses**: Player Agency, Synergy.
The current deck size of each role is 7 cards, which is fairly small and with a hand size of 5, you're going to see the same cards *very often*. So let's bump up the deck size to 14. 7 of those cards will be basic, just a value. 7 will be effect cards. Both will contain the standard 1-7 value range. This'll require some more thinking regarding *what* those cards will do and be named, but I'm hoping at least this limitation on counts will allow for more balance across roles.
### Card Effects
**Partially Confirmed for 1.1.0** unsure if all will make it, but the changes from the existing effects absolutely will.
**Addresses**: Synergy, Player Agency
The current set of 5 effects aren't nearly enough for a long lasting game with unique roles, and the fact that *some* effects have different values wasn't very clear while playing. (Some growth cards grew faster, some had no limit. Some stack cards only activated against certain horrors, etc.)

All effects will now *only* be applicable vs a particular horror type. This will color the effect icon. **Cosmic Effects** will be possible, and will work regardless of horror. This ensures the players have a reason *not* to play their best card, if it would be even better in other situations.

All card values will be clamped to 1-7, which should ensure card effects don't get out of hand with more of them, and give more opportunity for more ties, which feel very fun.

| Name            | Effect                                                                                          | Changes (from 1.0.0)                                                             |
| --------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Growth          | Makes the card value larger until hitting 7                                                     | Always 3                                                                         |
| Critical        | Adds 3 to the card value (with a maximum of 7)                                                  | Always 3                                                                         |
| Breaker         | Adds 3 to the card value during a tie (with a maximum of 7)                                     | Always 3                                                                         |
| Refresh         | Discards up to 2 other cards of your choosing.                                                  | Still redraws you 3 new cards, but allows you to keep 2, with the new hand size. |
| Stack           | Allows a second card to be played and added to this card's value                                | None                                                                             |
| Reversal        | Reverses the scoring, higher cards lose. Can be reversed by a second reversal.                  | None                                                                             |
| **Shrink**      | Makes the card value decrease until hitting 1                                                   | Probably useful against reversal.                                                |
| **Premonition** | Guess a number. Add +1 to this card's value during scoring for each card played with that value | Still a bit RNG, but can make players feel good and smart.                       |
| **Sight**       | Reveals opponent's hands for the next turn (but not their play)                                 |                                                                                  |
| **Counter**     | Disables effects from triggering on the played or scoring step.                                 | Allows for players to think about *just* the numbers for a turn                  |
| **Resolve**     | If you would collect your third horror this turn, prevent it.                                   | Gives the player a way to fight back against horrors.                            |
| **Dejavu**      | This card transforms into the *last card* you played before scoring. *including effect*         |                                                                                  |

### Multiplayer
**Confirmed for 1.1.0** This is the milestone I want to hit for a 1.1.0 release.
**Addresses**: Nothing, really, I just want it. Carpe them diems.
I've never made a game with multiplayer before, and after playing for a while one night I realized this would be a *great* drinking game. The only issue is it's currently not possible to play with others. Adding multiplayer will allow this as a possibility, and teach me more about Godot! I really wasn't sure if I wanted to continue working on this game, but big milestones like this keep me engaged and excited to develop.

To accommodate multiplayer, a massive re-write is being done to ensure the systems can work over the network. This encompasses all things, from the UI to the gameplay logic itself. Despite that, it's *most* of the way there. Cards can be played, bot players exist, up to 4 players can join even! It surprised me how simple it was to use Godot's High-level networking, but I'll admit it'd probably not be ideal for games that were quicker paced. Not to mention some of the bugs I've encountered so far have been bizarre.

## Future Plans and Ideas
These are just some ideas, some conflict with others, some are still pretty vague. Not all of them address anything specific. They're features I'm thinking about to enhance the game and maybe give the player some more things to do. They're *not* planned for 1.1.0, so don't expect them any time soon.
### Modular Roles
**Addresses:** Role limitations
Something I don't like about role portraits is that they've got differing styles and lighting. I've been experimenting with some 3D-2D pipelines and what I'd like to do is introduce a more modular system for building character portraits, separating the hair, head shape, outfits, and hats. This would allow me to build a library of assets a player could use to build their own character role and name it.

Of course... if you have custom characters that also means...
#### Custom Decks
A common request so far has been deckbuilding. I was hesitant at first because I didn't want to break the thematic properties of role decks, but I also imagine people can be a lot more creative than me and I'd be excited to see what people could build.

There won't be booster packs with a bunch of card names you have to Frankenstein into a deck. Frankly, managing a library of cards for the user feels like a lot. Trying to balance them all sounds like a hell I don't want to experience just yet.

Since card names are *more* flavor text than anything else, I'd like to allow the player to set their own card name for each of the 14 cards in their deck. The *Effects* are where things get interesting. The player can pay to reveal 3 effects and apply one to a card of their choosing. 
#### Horrors as a Currency
**HaaC** based economy. In a game of Godscrown, the player either wins with somewhere between 0-6 horrors, or loses with anywhere from 3-9 horrors. This fact won't change with the coming update. So what if we put those horrors to good use. Save a count of each horror type the player's ever collected, and use those as a currency for an in-game shop. You could purchase effects for custom decks, new customization options for your character, or more deck slots.
### Reaction Effects/Portraits
To add to the game feel of things, I'd like to introduce portrait reactions to events in the game, to show the character properly horrified when near death. I'd also like to introduce more particle effects and animations for the player's display when collecting horrors and such. It'd bring more life to the game and I think that's important.