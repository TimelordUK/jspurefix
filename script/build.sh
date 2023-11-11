#!/bin/sh
npm install
# npm run unzip-repo
./node_modules/.bin/tsc --version
./node_modules/.bin/tsc
npm run circular
