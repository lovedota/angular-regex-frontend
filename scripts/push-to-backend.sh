#!/bin/sh

rm -rf out || exit 0;
mkdir out;


cd out
git init

git config user.name "Travis-CI"
git config user.email "travis@example.com"

cp -rf ../dist .

git add .
git commit -m "Deployed to Public Folder"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
