#!/bin/sh

cd /code
yarn install
yarn run build
yarn run dev
