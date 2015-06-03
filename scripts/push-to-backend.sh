#!/bin/sh

rm -rf out || exit 0;
mkdir out;

(
cd out
git clone "https://github.com/lovedota/angular-regex-expression.git"
git config user.name "Travis-CI"
git config user.email "travis@example.com"
cp -rf ../dist .
git add .
git commit -m "Deployed to Public Folder"
git push --force --quiet master > /dev/null 2>&1
)