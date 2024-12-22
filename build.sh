#!/bin/sh

set -e

echo "Watching vault"
inotifywait -e "create,delete,modify,move" '--monitor' "vault" | \
    while read -r notifies;
    do
        echo "Got a change?!"
        obsidian-export vault content
    done