---
title: Stacklands
summary: A village builder where you stack cards to collect food, build structures, and fight creatures.
draft: false
date: 2025-10-30T20:17:19
lastmod: 2025-10-31T11:01:00
---
Stacklands is a very interesting game made by a team that aims to create a new game every month. That's insane to me. They've made over 100 games. Anyway, here I'd like to analyze Stacklands, which is one of their games I love! The premise is fairly simple, but the gameplay gets incredibly complex and somewhat fast paced as the time goes on.

## Genre
Card, Gacha, Crafting, Survival, Strategy?
## Gameplay
The game is a challenge against time and resource management. You need villagers to process resources into valuable items, which you can sell and buy more resources, but villagers require food to keep them alive, which you'll need to invest time of your villagers in order to get.

### Card Types
#### Food
Food is orange and comes in two flavors, edible, and inedible/uncooked. Some foods apply buffs to villagers that eat it. Each food card if edible has a point value, which villagers use to survive on.
#### Equipment
Equipment cards come in three types, Head, weapon, and armor. Each take up a slot on a villager, and apply various stat offsets and effects. Some change the villager's class
#### Villager
Villagers come in many shapes and sizes and are typically used for processing resources, crafting items, and battling. A villager requires 2 food points a day.
#### Enemy
Enemies are red, traverse the board and start battles when encountering a villager (or sometimes animals, I think?)
#### Animals
Animals are brown, and wander about leaving items behind like eggs, milk, or poop. They can shift around other stacks of cards which can be annoying.
#### Buildings
Buildings are salmon colored, and generally wait for other cards to be placed on them to do something.
#### Resources
Resources are black, and generally require a villager to process them into other item
#### Items
Items are gray, and can be stacked with other items and villagers in order to craft other types of cards.
#### Locations
Locations are purple, and placing a villager on top explores them which can reveal enemies or other cards that they find while on their journey.

### Mechanics
#### Timed Days (Moons)
Each day is timed, you must gather enough food to feed all of your villagers. The more villagers you have, the more food you need, and the more equipment required to make sure you have enough defenses.
#### Portal Events
Occasionally, some days spawn in portal, which after some time spawns in enemies. It's a good idea to gather equipment and enough villagers to handle this
#### Island Survival
There's a boat you can travel to an island from, which give a whole different currency and resources to utilize.
#### Packs
Each card pack is themed on different types of items, which are initially hidden from the player's knowledge and require opening and luck to find them all.
#### Limited Card Count
You're limited on how many cards you can have on the field, once a day ends you're forced to sell back down to that limit. Certain buildings can be built to increase this count.
## Thoughts
I'm always a bit torn on this game. I like a lot of the gameplay, it keeps me coming back. *However...* I find it becomes overwhelming after a while. Everything in this section is certifiably *my opinion* and completely subjective. You may disagree and that's fine. I think changing the problems I describe would make it fundamentally a different experience, and that may not be the experience the developers want. That's fine.
#### Problems
##### Card limit punishes new runs, but not long lived ones.
The Limited Card Count mechanic only *really* affects the beginning of the game. It's fairly trivial to create a **Warehouse** which increase your limit by a good amount, so once you acquire an **Iron Mine**, you can build an absurd amount of Warehouses which require no upkeep and permanently increase your limit. This feels like a punishment on new players who *can't* create warehouses, and instead have to rely on sheds which are considerably less effective, to the point where it's not even worth bothering to spend the resources for.
Designing around this... Does the card limit affect gameplay? It ensures the player can't just stockpile resources forever, until they can. It feels ineffective at doing its job. Removing it can cause the board to become covered in cards, which can be overwhelming as well. Here's some options that I could think of.
1. Make limit increasing buildings require a cost per day
	- Some kind of upkeep would ensure these buildings aren't just a "build and forget" sort of thing, maybe requiring gold, or villagers to maintain it? (So, you can only have as many warehouses as villagers, who then need food)
2. Remove the limit entirely.
	- This can lead to things being overwhelming, but at least you wouldn't need to think about card limits at all, and to keep card counts down perishable items could well, perish.
##### UI for recipes feels disorganized, busy.
Because of the crafting nature of the game, you often need to look up recipes for certain items. Recipes are categorized by groups and alphabetical from there, but there's no quick and easy way to tell if you *have* the items necessary to build a particular item in the list. When that list is long enough to require a scrollbar and recipes can take 4+ items in a stack, it becomes difficult to set up a recipe. This is made even more problematic when you might trigger other recipes while building the one you're trying to build.
There's a lot of ways to go about resolving this particular issue, and I think a combination of them would probably be best
1. Highlight recipes that can be made, dim the ones that can't.
2. Provide an ingredient counter on the recipe name. For example: **House (2/3)** showing that you have 2 items, but are missing 1.
3. Add a search so users can loop up a specific recipe by name.
4. Add filters so users can filter recipes by ingredients
5. Add pinning recipes to always show them on screen, to help build recipes being created on the field
6. Add favoriting recipes to show them at the top of the list
7. Toggle grouping of recipes, this isn't particularly helpful to me at least, maybe to others. Alphabetical is more than enough with the other options listed here.
8. Add auto-recipe completing. Dragging an item from the recipe list onto the field could auto-fetch the required items from the field and create a stack that will create that item.
##### Game is very bright
I could tell from the game's store page that they've already reduced the saturation of the game quite a bit.  I still find it very bright though, it'd be nice to have some customization options for a dark mode or custom palette in general. Game seems cozy in its art style though and I could respect the vibes there.
##### Timers make the game a lot more frantic, but it's basically turn based with the ability to pause
Stacklands features auto-pausing when dragging cards, which is nice, but there's moments where nothing's being crafted into anything where the user's most optimal choice would be to pause the day and set up recipes. This feels tedious and anything less is suboptimal. Additionally, when a day is nearing it's end, it's unclear if I have enough time to finish some recipes. Those timers will continue the next day, but when it's a matter of having to craft something or just sell the ingredients, it feels bad.
I feel like there's a *few* options to resolving this, but only some keep the game the same.
1. Display the recipe time overlaying the remaining day time
	- Think bar-below-bar sort of display to show recipes below the day time, maybe?
	- Might get chaotic with a ton of recipes going at once.
2. Ditch realtime timers in favor of turn-based actions.
	- As far as gameplay goes you usually want to be pausing between inaction anyway for peak efficiency, making the game feel like a turnbased game already.
	- This would change the fundementals of how the game plays out, would animals and enemies respect the turns or break that?
	- Would require setting up "amount of turns" for recipe times, and the day timer could show amount of turns left. 
	- I suppose moving cards into a stack would take a turn, but there'd likely need to be a way to progress turns when all you're doing is waiting for crafting or something.
		- Or you could auto-progress turns, but this implies you're not able to change what a villager is doing while they're doing it. Would change gameplay quite a bit.
##### Game's difficulty comes from how overwhelmed the player gets.
If the game weren't overwhelming with the amount of things on the board, it probably wouldn't be difficult at all. You can avoid combat by moving cards away from enemies, you can get reasonable engines of food going once you have the right buildings. Seems like the primary stress factor is organization of all the stuff. This is exacerbated by animal cards and enemy cards who push your stacks around and the grid not being always on. It's also combatted with items that "glue" other cards down or others that pull certain cards towards it.
This type of difficulty to me doesn't come with a satisfying reward. I'm not satisfied with putting my cards back in order, or satisfied with having to move cards around because some building threw a piece of wood to the corner. I'm not satisfied with removing a rabbit who is constantly pooping all over the field as it bumps and knocks things around.
The reward of "thinks are more organized" has an upper limit that's pretty much where I expect most games to put me, but the punishment of "cards being jumbled up" is much much much larger to the point of frustration.
So, how do you solve this? 
1. Remove "bumping" cards around.
	- Animals that move around do so randomly, it doesn't make to me sense because Villagers don't move at all. Animals *could* path to food, stacking on top of them and eating the stack. This makes them still a nuisance, but less regarding your organization.
	- Enemies only path to get to people, so, let them do that but don't let them move cards around, just have them on top or something.
2. Remove the need to organize cards entirely
	- Where's the "fun" in card organization? Most TCG games have zones for types of cards or stacks, this could do the same, forming a stack in a specified area, sorting cards alphabetically, making things easier to find and use. This implies some kind of crafting zone where you create things. Perhaps roaming mobs could exist outside of this system, since cards like the animal pen could contain them, and battles can have their own zone to deal with them.
3.  Put cards on a grid *always* 
	- There is a built in grid system but it feels clunky with stacks, if they always locked to a grid then at least visually it'd feel less chaotic.
	- The bumping mechanic could be removed, but if it were to stay, it could ensure cards only get bumped to the next cell, meaning you could build around it by making two-layer thick card walls that would prevent the bump (since that tile is taken) or hell, stack them. which could lead to weirder things of an animal forming a recipe.