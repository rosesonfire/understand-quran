#!/bin/sh

docker-compose down
docker-compose up -d $1
