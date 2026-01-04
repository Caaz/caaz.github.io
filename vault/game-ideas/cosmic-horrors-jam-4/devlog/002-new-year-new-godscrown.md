---
title: 002 - New year, new Godscrown
summary: Some minor changes to Godscrown's Gameplay.
draft: false
date: 2026-01-03T17:12:42
lastmod: 2026-01-04T11:42:17
weight: "1"
---
So over the past few months I've been thinking a lot about Godscrown, and how to improve the clarity of the gameplay. *Most* of the changes from [[001-post-jam-planning|the previous devlog]] are still planned, with some notable changes.

## Changes

### Reworking the Horrors
Just a small name change. Anomaly, Arcane, Abhorrent. "Monstrosity" always stuck out to me, and it meant either I change Arcane or Anomaly to something else, or I lean into the alliteration. Alliteration is fun, so here we are.
### Reworking the Action Deck
As I was working on character customization, the step for creating a character's action deck was overwhelming and kind of... pointless? The text on cards needs to be short and limited arbitrarily to fit onto cards. When played, they rarely make any sense a "reckless bluff" makes sense against certain horrors, but against the concept of an endless night? Weird choice.

Another problem was with effects, you'd have two sets of cards ranging from 1-7, but only one had effects. The effects were *intially* scaled to the card value, because certain things didn't make much sense, like growth (where a card increases in value until hitting 10) on a 7 card barely mattered. Or a reversal effect on a high value card would usually make the player lose. This made customization of a deck and *how* those effects would be applied to cards confusing to work with, and I was a bit at a loss for how to make a system balanced around it.

A third problem with having a deck was balance and variety. I had wound up with this 14 card deck, where the player could never had duplicates and this system *works*, but it still felt fairly limited and the potential for interesting decks was quite low. increasing the deck size really just made the previous two problems worse.

The solution to both of these problems? Remove the action deck entirely. Use **Dice**.
#### Dice
Instead of drawing a card from a role's action deck, instead they'd roll a die, the value would be added to their "hand". A secondary (unshown) RNG would determine that roll's "effect" which would come from the character's effect pool.

An interesting opportunity this leaves is dice customization. The scientist's dice might be pristine, a perfect cube. While the cultist might have something more ornate, hand carved perhaps. I'll leave that for a future me problem, but 
### Effects
Instead of effects being tied to cards (or... dice in this case?) effects will instead be tied to the character. 

One of the requests during the jam version of the game was to see a character's deck, and I imagine this would be to check effects since that's the primary difference between characters. The problem with viewing an entire deck is with the newer large deck, we'd have to scroll through 14 cards, 7 of which just have unique text, the other 7 containing effects, some/most of them duplicates.

With effects tied to the character, I can instead list a handful of effects the character can apply, keeping the information screen short and concise.
### Biases
Character Biases came up a lot during character customization as well. I *could* absolutely just let the player choose their biases. There's not really a way to cheese that system as it's inherently balanced no matter what you pick. (so long as no value can be null). However, something that's been trying to wedge itself in my mind is some way to set biases based on the effects chosen for the character. 

Let's imagine the bias property of a character as a three dimensional vector, where each axis represents a horror type. `(Anomaly, Arcane, Abhorrent)`, with no effects at all, we have  `(0,0,0)`. This would lead to a completely flat bias (Like the ironworker!) Now let's say we have an effect: `Critical [Anomaly]` which will apply a bias of `(1,-.5,-.5)`  Now, we have a tie for what the negative bias will be, but we know what the positive one is, Anomaly. 

So how do we break the tie? One option is to just sort by some fixed value, another is to let the player choose which bias they want to go with. Either seems fine I suppose.

### Art Pipeline
So, when I did the gamejam version of Godscrown, everything was *very* fast and sloppy. This lead to wonky character faces and a few hastily scribbled horror cards. I'm *still* proud of what I did, I think it holds up well for what it is. However! I want to really refine and develop a process for this game that feels good to work in and is a bit more managed. This is especially important because I want to add a lot more characters, animations, and horrors!

Right now I'm still *very* in an experimental phase of development for the art pipeline. But here's the gist!
![[art-pipeline.png]]
Going forward, what I'll be doing is taking the existing assets/references and making a 3D model based on them. This allows me to set up a consistent lighting direction *and even a rim light!* I *could* absolutely leave it there and do animations and render the game in full 3D. However, I feel like my skills for facial animations generally isn't there to make a quality product with it, and I don't want to release anything that isn't my best work. So, after rendering the 3D model in a *much* more lower res variant, I was able to get a more refined pixel art portrait, and that's what I'll be doing for all characters going forward. This ensures every character is viewed from the same angle, with the same lighting.

I'll likely be animating the 3D models anyway to create a sprite sheet I can then use as reference for pixel art. Something interesting about this method is I'll be able to render the pieces of characters separately, so I may render the hat in different layers, allowing me to split characters up for the character customization efforts.

#### Color Palette
Godscrown has a limited color palette, and I think this does wonders for creating the atmosphere I'm trying to make here. *However* I'm really finding some annoying limitations especially in regards to darker hues. This became more apparent during the creation of the Femme Fatal, who has the darkest skin. It was *really* difficult making her work, and it's really difficult to have a set of darker colors for other shades. I'm  probably going to extend the darker shades of the palette to account for this!

As for the horror colors, currently there's about 3 of each, and it works, but I think I'm going to extend that a bit further as well. I had already cheated a tiny bit here, as the Star Crowned King card didn't respect the color palette anyway.
## Mock Up
There's *a lot* to be desired regarding the visuals of Godscrown. Currently it's a solid background with some cards with text that doesn't matter. With the changes outlined here, we'll have dice being rolled enchantments coming from the characters, and a dice-based hand!
![[mock-new.png]]
I'm thinking it'll look something like this! The dice *might* wind up being rendered in 3D, it all really depends on how I go about animating the roll. What might the dice look like in 3D? Something like this I imagine.
![[dice-render.png]]