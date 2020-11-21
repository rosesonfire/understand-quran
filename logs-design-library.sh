#!/bin/sh

while ! docker-compose logs -f --tail 100 design-library
do
  echo "$(date) - server is down ...."
  sleep 1
done
