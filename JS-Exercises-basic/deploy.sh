#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# copy index.html to 404.html
# to fix routing via URLs
cp index.html 404.html

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B deploy
git add -A
git commit -m 'deploy'

# !!! Pas onderstaande <USERNAME>/<REPO> aan en haal het uncomment de regel !!!
# daarna kun je vanuit de terminal deze file uitvoeren om je site op Github pages te publiceren.
# git push -f https://github.com/<USERNAME>/<REPO>.git deploy:gh-pages

cd -