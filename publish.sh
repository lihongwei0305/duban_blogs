#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


if [  -d docs/.vitepress/dist ]; then
     rm -rf docs/.vitepress/dist
fi

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'publish'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/lihongwei0305/duban_blogs_preview.git master

