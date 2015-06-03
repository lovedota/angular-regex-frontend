#!/bin/sh

rm -rf out || exit 0;
mkdir out;
gulp build

(
cd out
git init
git config user.name "Travis-CI"
git config user.email "travis@example.com"
cp ../CNAME .
cp ../index.html .
cp -rf ../dist .
git add .
git commit -m "Deployed to Public Folder"
git push --force --quiet "https://github.com/lovedota/angular-regex-expression.git" master > /dev/null 2>&1
)