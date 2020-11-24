#!/bin/sh

while ! curl http://npm-registry:4873
do
  echo "$(date) - waiting for npm-registry ..."
  sleep 1
done

cd /code
yarn install

while ! (yarn run lint && yarn run build)
do
  echo "$(date) - restarting server ..."
  sleep 1
done

npm unpublish "@uq/design-library" --registry http://npm-registry:4873 --force
npm publish --registry http://npm-registry:4873

while ! (yarn run build-stories && yarn run start-storybook)
do
  echo "$(date) - restarting server ..."
  sleep 1
done
