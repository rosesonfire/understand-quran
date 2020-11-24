#!/bin/sh

while ! curl http://npm-registry:4873
do
  echo "$(date) - waiting for npm-registry ..."
  sleep 1
done

cd /code
yarn install --registry http://npm-registry:4873

while ! (yarn run lint && yarn run build && yarn run dev)
do
  echo "$(date) - restarting server ..."
  sleep 1
done
