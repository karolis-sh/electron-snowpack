#!/bin/sh

set -a; source .env.local; set +a

if [ -z "$GH_TOKEN" ]; then
    echo "🚨 Missing GH_TOKEN env variable"
    exit 1
fi

if [ -z "$(npm whoami)" ]; then
    echo "🚨 Not logged in to npm"
    exit 1
fi

if [ -z "$(git status --porcelain)" ]; then
    git checkout main
    git pull
    yarn release
else
    git status --porcelain
    echo "🔼 Working directory not clean";
    exit 1
fi
