---
title: Multiplayer
summary: The multiplayer architecture for Godscrown.
draft: true
date: 2025-11-08T15:25:43
lastmod: 2025-11-14T15:14:53
---
Multiplayer, my white whale.

So I've never made a multiplayer game over the network. Reason being is I don't often make games that would be good for it. Godscrown however feels like a big exception. I've started development work on it already, and have run into some hurdles. The biggest of which is all these ad-hoc functions that pass arbitrary data around. It's getting complex to really figure out what's going on here. I've got card effects that are going to be making this even more complex, so I need to start formalizing the protocol.

## Sequence Diagram.
I'm hoping that plotting this out can simplify the design and identify the functions and data I need to pass along. Here's what I have so far:

```mermaid
sequenceDiagram
	box Host
		participant Alice
	end
	box Peer A
		participant Charlie
	end
	box Peer B
		participant Daniel
	end
	Note over Alice: Creates a lobby<br>Sets player info for self
	Note over Charlie: Joins lobby
	Note over Daniel: Joins lobby
	Charlie->>Alice: Sends player info
	Note over Alice: Host sends Lobby Info to peers
	Daniel->>Alice: Sends player info
	Note over Alice: Host sends Lobby Info to peers
	Note over Alice: Presses Start Game
	create participant Bot
	Alice->>Bot: Creates bot to fill empty play slot, choosing info
	Note over Alice: Host sends Lobby Info to peers
	critical Players send ready signal when Game scene has loaded
		Charlie->>Alice: Ready
		Daniel->>Alice: Ready
	end
	loop Game turn
		Note over Alice: Sets a new Horror<br>Draws cards for each player
		Note over Alice: Host sends Game State to peers
		par Host requests an Action
			Alice->>Alice: Request Action
			Alice->>Bot: Request Action
			Alice->>Charlie: Request Action
			Alice->>Daniel: Request Action
		end
		Alice->>Alice: Sends index of action card(in hand)
		Note over Alice: Host sends Game State to peers
		Bot->>Alice: Sends index of action card(in hand)
		Note over Alice: Host sends Game State to peers
		Charlie->>Alice: Sends index of action card(in hand)
		Note over Alice: Host sends Game State to peers
		Daniel->>Alice: Sends index of action card(in hand)
		Note over Alice: Host sends Game State to peers
	end
```