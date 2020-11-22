#!/bin/sh

while true
do
  docker-compose logs -f --tail 100 design-library
  echo "$(date) - server is down ...."
  sleep 1
done
