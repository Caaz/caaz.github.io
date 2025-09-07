---
title: MageLoop Architecture
summary: A new page
draft: false
date: 2025-08-13T21:09:20
lastmod: 2025-08-13T21:23:46
---
There's a lot of pieces to game. I need to figure out how to fit it all together.

- Line
	- Firewall
	- Targeting
- Enemy

## Nodes
### Loop3D
The basic tool for drawing a loop on screen. It should handle circle detection.

| Signal       | Description                         |
| ------------ | ----------------------------------- |
| loop_created | Fired when a loop has been detected |

