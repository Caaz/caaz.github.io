# Caaz.me
This repository is the source of a portfolio / blog site I have!

## Development

### Content
Start the development server with `docker compose up --watch`, this will automatically rebuild the pages when files in `./vault` are changed.

### Theme
The theme doesn't automatically rebuild on change, but through the VSCode plugin [Run on Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave), any time an .html file is saved, `docker compose restart server` is ran, effectively allowing changes to propogate to the development server. Reloading the page in the browser will display the new changes.
