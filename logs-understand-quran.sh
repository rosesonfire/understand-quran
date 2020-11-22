#!/bin/sh

while true
do
  docker-compose logs -f --tail 100 understand-quran
  echo "$(date) - server is down ...."
  sleep 1
done
