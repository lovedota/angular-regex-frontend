#!/bin/sh

rm -rf out || exit 0;
mkdir out;


cd out
git init

git config user.name "Travis-CI"
git config user.email "travis@example.com"


#using token clone gh-pages branch
git clone --quiet --branch=gh-pages https://${GH_TOKEN}@github.com/lovedota/angular-regex-expression.git  gh-pages > /dev/null

#go into diractory and copy data we're interested in to that directory
cd gh-pages
cp -rf ../dist .

#add, commit and push files
git add -f .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER pushed to gh-pages"
git push -fq origin gh-pages > /dev/null

echo -e "Done magic with coverage\n"