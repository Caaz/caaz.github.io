#!/bin/sh

rm -r /src/content/*.md
obsidian-export /src/vault /src/content
