# Caaz.me
This repository is the source of a portfolio / blog site I have!

## Goals

### Project
- [x] I want to be able to edit my content through Obsidian.
- [x] I want to be able to have full control of my theme
- [x] I want to have a development server, so that I don't need to rely on publishing to view my changes
- [x] I want to avoid pushing built code to github.
- [x] I want to ensure links are *more* permanent.

### Theme
- [ ] I want to allow users to switch between light and dark modes

## Development

### Content
Start the development server with `docker compose up --watch`, this will automatically rebuild the pages when files in `./vault` are changed.

### Theme
The theme doesn't automatically rebuild on change, but through the VSCode plugin [Run on Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave), any time an .html file is saved, `docker compose restart server` is ran, effectively allowing changes to propogate to the development server. Reloading the page in the browser will display the new changes.
