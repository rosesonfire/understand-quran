#!/bin/sh

cd /code
yarn install

while ! (yarn run lint && yarn run build-stories && yarn run start-storybook)
do
  echo "$(date) - restarting server ..."
  sleep 1
done
