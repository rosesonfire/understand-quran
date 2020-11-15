#!/bin/sh

cd /code
yarn install

while ! (yarn run lint && yarn run build && yarn run dev)
do
  echo "$(date) - restarting server ..."
  sleep 1
done


