#!/bin/sh
rm -rf /src/content/*.md
obsidian-export /src/vault /src/content
