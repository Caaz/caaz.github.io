---
title: Making an Obsidian Driven Github Pages site
summary: Learn how to make a site like this one, hosted via Github Pages and populated via Obsidian notes.
draft: false
date: 2025-01-25T13:54:19
lastmod: 2025-01-25T17:58:28
post: 3lgmd7hbw7s2q
---
This site has gone through a few evolutions over the years, as a web developer, I've always been tempted to try out new technologies and frameworks to express myself online. As a now burnt out and exhausted web developer though, I've found the content is far more important than what it's built in. I've settled on using Obsidian to write and update these pages, and have a few build steps to convert those into an easily navigable frontend for users to read all of the pages. Here, I'll show you how I set that up.

I *could* just make this a github repository you could simply fork and start from there. If someone wants to do that, I'll link it here.
## Goals
By the end of this, you should know how to:
- Organize Obsidian notes for Hugo usage
- Convert Obsidian notes to Hugo markdown
- Build a Hugo Site
- Deploy the site to Github Pages
( But not all in that order! )
## Terminology
I'm going to be using these terms as if you know them already, but if you don't, here's some simple definitions with links for more information.

| Term              | Description                                                                                                                                                                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Hugo**          | [Hugo](https://gohugo.io/) is an open-source [golang](https://go.dev/) static site generator. In this tutorial, it's the tool that takes markdown files and turns them into html pages.                                                                                                    |
| **Markdown**      | [Markdown](https://en.wikipedia.org/wiki/Markdown) is the file format that Obsidian and Hugo uses for text files. It allows styling text in a manner that's easy for humans to quickly edit.                                                                                               |
| **Github Action** | [Github Actions](https://github.com/features/actions) are workflows that exist on the *cloud*. They're a set of instructions you tell the server to act out, and it does them. In a much more boring sense, they're a scripts confusing formatting intended to be ran on Github's servers. |
| **Docker**        | [Docker](https://www.docker.com/) is a containerization tool. It allows us to set up an environment inside of Docker, so that we don't have to install our tools on your actual system. (this avoids a lot of nonsense regarding versioning and setup)                                     |
| Podman            | [Podman](https://podman.io/) is an open-source alternative to Docker. It's practically a drop-in replacement, so if you'd like to use it, feel free. I've hit some mild issues setting it up on my machine, but I figure that's a my-machine-issue more than anything else.                |

## Tutorial
### Heads up!
I'm going to be using terminal commands almost exclusively for this tutorial. This *may* be scary, but I'll do my best to link to resources or explain what these commands do. This tutorial will be the hardest part, when you're done, everything is just a button away.

### Setting up the repository
1. Go create a [new Github repository](https://github.com/new), it should follow the naming convention of `your_username.github.io` for example, my username is Caaz, so my repository is at `caaz.github.io`
	1. It *must* be Public for pages usage, [according to their own tutorial](https://pages.github.com/)
	2. Don't use a template or add anything at this point.
2. Pop into the settings for your repository and set Pages to deploy from a Github Action.
![[github-actions.png]]
3. Install git
	1. On Windows you can use `winget install Git.Git` or go to https://git-scm.com/downloads and install it.
	2. On linux why are you asking me you're already a big enough nerd to know how
4. Set up a ssh key for Github
	1. This is a fairly complicated bit, follow [Github's guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). This allows Github to know when you use Git it's you.
5. Open up your terminal of choice and navigate to a location you want your site to reside.
	1. I like a folder in the home folder called "Projects" which houses all of my repositories. in Poweshell (Windows), Bash, or whatever Macos uses, the command is the same
		1. `mkdir ~/Projects`  This makes a directory, a "folder"
		2. `cd ~/Projects` This changes the current working directory, where you are in the terminal.
6. Clone your repository locally using `git clone https://github.com/your_username/your_username.github.io` You may also find an option to clone from the repository page itself.
![[github-clone.png]]
You should now have a mostly-empty folder locally. It'll have a `.git` folder which is where git holds information about your repository and past commits. You won't need to worry about the folder itself, just let it be.

### Setting up Compose
We're going to be using a Compose file with Docker or Podman (which you use is up to you, but I'll describe docker instructions). This will give you access to Hugo and build tools in a container, and allow you to browse your site locally, without having to push it to Github.

1. Install Compose
	1. If you want to use Docker, follow [their instructions here](https://docs.docker.com/compose/install/).
	2. If you want to use Podman, follow [their instructions instead](https://podman-desktop.io/docs/compose/setting-up-compose).
2. Create a `compose.yml` file. This defines our "Development server" based on a [minimal up-to-date hugo docker image](https://docker.hugomods.com/).
```yml
name: example-site
services:
  hugo:
    image: hugomods/hugo:exts-non-root
    command: server --buildDrafts --renderToMemory --poll 1000ms
    volumes:
      - ".:/src/"
      - ~/hugo_cache:/tmp/hugo_cache
    ports:
        - "1313:1313"
```
3. Verify it works with `docker compose run hugo version`
	1. This should print out the version of hugo the container is using. At the time of writing I get `hugo v0.142.0-1f746a872442e66b6afd47c8c04ac42dc92cdb6f+extended linux/amd64 BuildDate=2025-01-22T12:20:52Z VendorInfo=hugomods`
4. Create the new site with `docker compose run hugo new site . --force`
	1. This will create the barebones folder structure that hugo needs to build your site.
5. Add a theme.
	1. For this, we'll use ananke. Pull it with `git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke`
	2. Configure the theme in hugo's settings by adding `theme = 'ananke'"` to the `hugo.toml` file
6. Run the server to view your site so far! `docker compose up` visiting http://localhost:1313 should show you a page with *almost* nothing, so let's resolve that. (you can close the process while we continue with Control+C)
### Setting up Obsidian
Hugo expects markdown folders in the `content` folder, but those markdown files need to be in a particular flavor for Hugo to read them. So instead, let's create a `vault` folder to place our Obsidian files.
1. Create a `vault` folder at the root of your repo.
2. Open that folder with obsidian as a vault
	1. ![[obsidian-vault.png]]
3. Create a new note, title it `_index` and put whatever you like in the note.
	1. Why `_index`? Well, that has to do with how Hugo wants pages to be organized. `_index` at the root will mean this first page is the "Home Page", what's displayed when someone visits `https://your_username.github.io/` You can read more about [content organization in Hugo here](https://gohugo.io/content-management/organization/).  You can see [how this site's notes are organized here](https://github.com/Caaz/caaz.github.io/tree/82b1c25443fd2ed3276c4b8907686f77afb20146/vault).
### Setting up obsidian-export
Obsidian-export is a rust-based tool to convert Obsidian-flavored markdown into Hugo-flavored markdown. This is important to ensure links work between notes!

1. Create a `dockerfile` file, and set it up to install and use obsidian-export
```dockerfile
FROM rust:bullseye AS build
RUN cargo install obsidian-export
ENTRYPOINT ["obsidian-export"]
```
2. Update the `compose.yml` file to rebuild content whenever the vault contents change.
```yml
name: example-site
services:
  build:
    build: .
    volumes:
      - "./vault:/src/vault"
      - "./content:/src/content"
    command: /src/vault /src/content
    develop:
      watch:
        - action: rebuild
          path: ./vault
  hugo:
    image: hugomods/hugo:exts-non-root
    command: server --buildDrafts --renderToMemory --poll 1000ms
    volumes:
      - ".:/src/"
      - ~/hugo_cache:/tmp/hugo_cache
    ports:
        - "1313:1313"
```
3. Verify things work, by using `docker compose up -w` The addition of the `-w` will ensure that the "watch" feature is enabled, docker will listen for changes to the vault, and rebuild the content. Hugo will check every second for changes and rebuild your site, so you don't need to rerun the server to see any changes. This makes previewing the site very seamless.
![[ananke-example.png]]
4. Add render hooks for images at `layouts/_default/_markup/render-image.html`
```gotemplate
{{- $url := urls.Parse .Destination -}}
{{- $scheme := $url.Scheme -}}

<img src="
  {{- if eq $scheme "" -}}
    {{- if strings.HasSuffix $url.Path ".md" -}}
      {{- relref .Page .Destination | safeURL -}}
    {{- else -}}
      {{- printf "/%s%s" .Page.File.Dir .Destination | safeURL -}}
    {{- end -}}
  {{- else -}}
    {{- .Destination | safeURL -}}
  {{- end -}}"
  {{- with .Title }} title="{{ . | safeHTML }}"{{- end -}}
  {{- with .Text }} alt="{{ . | safeHTML }}"
  {{- end -}}
/>

{{- /* whitespace stripped here to avoid trailing newline in rendered result caused by file EOL */ -}}
```
5. Add render hooks for links at `layouts/_default/_markup/render-link.html`
```
{{- $url := urls.Parse .Destination -}}
{{- $scheme := $url.Scheme -}}

<a href="
  {{- if eq $scheme "" -}}
    {{- if strings.HasSuffix $url.Path ".md" -}}
      {{- relref .Page .Destination | safeURL -}}
    {{- else -}}
      {{- .Destination | safeURL -}}
    {{- end -}}
  {{- else -}}
    {{- .Destination | safeURL -}}
  {{- end -}}"
  {{- with .Title }} title="{{ . | safeHTML }}"{{- end -}}>
  {{- .Text | safeHTML -}}
</a>

{{- /* whitespace stripped here to avoid trailing newline in rendered result caused by file EOL */ -}}
```

### Configuring the site
#### Hugo
[Hugo has a *lot* of configuration options](https://gohugo.io/getting-started/configuration/), and it's worth digging through the basics. Many themes will read from this configuration to populate metadata on pages which help when getting those little card previews on social media sites.

[You can see what I've set on this site here](https://github.com/Caaz/caaz.github.io/blob/main/config.toml).
#### Theme
At this point, you've got Obsidian hooked up to Hugo, content management is in your hands. But it's obvious that the site is lacking any real flashy styles. That's purely because ananke is a minimalistic theme, but it has some options, you can read more about it in [their documentation](https://themes.gohugo.io/themes/gohugo-theme-ananke/). You can also try out [many, many other themes](https://themes.gohugo.io/). 
The theme I'm using is custom built, and I'd be willing to make it more accessible to others if people are interested, but it'd take some development work to make it a bit more configurable for people that aren't me. Let me know if there's demand for that.
#### Front matter
You'll find that most themes make use of [metadata on pages](https://gohugo.io/content-management/front-matter/), you'll have to provide those yourself. A quality of life addition I've done to make this easier is utilized [Obsidian's template plugin](https://help.obsidian.md/Plugins/Templates). 
1. Create a `_templates` folder for housing page templates in obsidian.
2. Ensure `_templates` aren't considered "pages" for obsidian-exporter. 
	1. Create a `/vault/.export-ignore` file, and put `/_*/*` in it. This will ensure any folder starting with `_` is ignored by obsidian_exporter. This is handy for other obsidian plugins that need a folder too, just make sure they're prefixed with underscore.
3. Create a `page` template with the following frontmatter:
```markdown
---
title: New Page
summary: A new page
draft: false
---

```
Now, whenever you create a new page you can hit Control+P to bring up the commands, type template and insert the new page template which should populate your frontmatter quickly. You may want to input additional frontmatter variables depending on your template and its needs.
#### Update times
Another QOL addition you might find handy is the "[Update time on edit](https://github.com/beaussan/update-time-on-edit-obsidian)" community plugin. I've got it configured to update the `lastmod` and `date` frontmatter variables, as those are what my theme use.
![[update-time.png]]
#### Git
There *is* a [Git community plugin](https://github.com/Vinzent03/obsidian-git), and it can easily stage, commit, and push your files to github with the click of a few buttons in Obsidian itself. It might be a nice option if you want a full-obsidian approach to managing content. 
### Setting up Github Actions
We're going to be utilizing Github Actions to build our site. This allows us to automatically build our site whenever we update the repo, and allows us to easily update our site from any device that can push to git, without having all of the dependencies and hassle we've set up so far.

1. Create a file at `.github/workflows/deploy.yml` and populate it with this:
```yml
name: deploy
on:
  push:
    branches: [ "main" ]

  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true

      - name: Cache cargo plugins
        id: cache-obsidian-export
        uses: actions/cache@v1
        with:
          path: ~/.cargo/bin/
          key: ${{ runner.os }}-cargo-plugins

      - name: Install obsidian-export
        if: steps.cache-obsidian-export.outputs.cache-hit != 'true'
        uses: actions-rs/install@v0.1
        with:
          crate: obsidian-export
          version: latest

      - name: Create content directory
        shell: bash
        run: mkdir -p ./content

      - name: Export Vault
        shell: bash
        run: obsidian-export ./vault ./content/

      - name: hugo
        uses: klakegg/actions-hugo@1.0.0
        with:
          image: ext-ubuntu

      - name: Upload static files as artifact
        id: deployment
        uses: actions/upload-pages-artifact@v3
        with:
          path: public/

  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4 
```
2. Clean up the repository, and make sure we don't push things we don't want to. Create a `.gitignore` at the root of the repo. We're going to populate it with this:
```.gitignore
public
static
resources

# This appears to be specifically for obsidian UI, dealing with conflicts is annoying and seemingly uneccessary.
vault/.obsidian/workspace.json

# Don't commit content, but ensure the folder exists
content/*
!content/.KEEP
```
3. Create a `.KEEP` file in `content`. This is just so that it gets pushed to Github, as we're going to need it to exist for building purposes. There may be a fancier way to ensure that exists but that's what I've been familiar with.
4. Finally, we're ready to push all this. In the terminal use the following commands, (or use the Git plugin in Obsidian if you want to be fancy)
	1. `git add .` to "stage" all the changes we've made so far
	2. `git commit -m "Initial commit"` to commit the changes with a message
	3. `git push` to push them to Github. (it may suggest something like `git push -u origin main` or something, yeah do that.)
5. Go to your repository on Github, and take a look at the **Actions** tab. You *should* see a running (or finished) action of your site being built, and once it's complete it should be available at `https://your_username.github.io/`
6. ????
7. You're done!
## What next?
Well, you should have a basic Hugo site, most of the *fancy features* of hugo usually come from the theme you happen to be using. For example, mine has Bluesky integration, that fancy table of contents that updates as you scroll, mobile-readiness, etc. Try out different themes and see what works best for you. 

You're going to want to get a good understanding of how Hugo's content management works, and [their site](https://gohugo.io/content-management/) is going to be the best resource for that. 

Editing your site with the development server up should be pretty smooth. One issue I've ran into is the `content` folder will contain pages that have been deleted in the `vault` folder, occasionally deleting the files in there helps this. *my site* has a script to do so, with some changes in how the build step works. I didn't want to include this here just yet cause I feel there's likely a cleaner solution I haven't bothered figuring out yet.