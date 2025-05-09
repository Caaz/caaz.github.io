---
title: Zentonation
summary: What if Zuma was a word game?
draft: false
date: 2025-04-08T14:44:28
lastmod: 2025-05-08T20:30:24
---
*Working title*

Zentonation is a game in which the player must form words on a chain of letters. 

## Levels
Each level in Zentonation will feature a **Poem**, and the player is free to choose any level in the game to play through a level select list.
The list needs to display a few things
- If they've completed the level, and if so:
	- The player's previous score (score + time) 
	- A button for displaying the backstory of the level
- A preview of the level
![[ref_5.png]]
# Poems
Each poem in the game will feature a backstory, which will be locked until the player completes the level. 

Most of these poems will be similar to haiku, but I've done my research and understand that I'm breaking enough rules that they can't even be called that. Senryu may be more appropriate, as they're likely going to be pretty personal in nature. For now though, I'll just call them poems. They'll generally be fairly short and likely not rhyme. 

My rule of thumb for writing these is: No big words, that makes the game hard, and no fluffy nonsense, I just don't like that.
# Mechanics
The only thing here that's set in stone is the mechanics, so here's an explanation of how they work

| Visual            | Description                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Green Square      | The player's position, showing the letter they're holding, to be shot out when the player clicks anywhere in the level                                                                                                                                                                                                                                                      |
| Purple Text       | The current poem, which is the level's goal. <br><br>The player handles one line of the poem at a time, which ensures the difficulty remains relatively low.<br><br>Darker lines aren't currently active, and their letters won't appear in the chain.<br><br>Darkened words aren't goal words, due to being too short (or too long, depending on how I feel about balance) |
| Red circles       | The chain of letters, these letters flow in a constant direction, slowly. Players form words on this chain, in the reading direction only, regardless of the moving direction                                                                                                                                                                                               |
| Blue Circle       | The player's shot, with the letter they were holding when they shot it.                                                                                                                                                                                                                                                                                                     |


## Forming a word
The player's goal is to match the **goal words** in the **poem**. The player is rewarded for completing the level quickly, with a timer counting up their time in the level.
### Initial Shot
The player from their position shoots out letters towards the chain. When the marbles touch, the chain shifts out of the way, allowing for the marbles to slip into the chain.
![[ref_1.png]]
### Matching
When a match happens, some visual should appear to show that the word has been solved in the poem, and the marbles briefly display the match, before disappearing.
![[ref_2.png]]
### Clean up
Letters that were in the matched word, but not in any other words of the current goal words will be removed from play. This ensures the field only shows letters that are relevant to the goal.
![[ref_3.png]]
### Collapse
After those animations play, the chain shifts the letters backwards, collapsing the space. This allows the player to have more room to aim at other parts of the chain at earlier sections. 

After collapsing, the chain is checked for matching words again, allowing for the potential for **combos**!
![[ref_4.png]]

## Score
During a level, the player has the opportunity to rack up points, via matching words and combos
- 100 points per letter in a matched word
- 10 points per letter cleared in the clean up step
- Combo words stack as follows, multiplying the score acquired by 2, 4, 8, 16, and 32. 
	- 200 points per letter in a word, 20 points per clean up letter
	- 400 points per letter in a word, 40 points per clean up letter
	- 800 points per letter in a word, 80 points per clean up letter
	- And so on
After the level, their score is subtracted by the time they took to complete the level (a point per second)

It is admittedly unlikely someone would rack up a high combo multiplier, but I've witnessed zuma and puyo puyo players do inhuman feats beyond my imagination, and they should be rewarded for their skills.