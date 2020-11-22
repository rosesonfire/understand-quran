#!/bin/sh

while true
do
  docker-compose logs -f --tail 100 npm-registry
  echo "$(date) - server is down ...."
  sleep 1
done
