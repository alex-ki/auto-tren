#!/bin/bash
echo "--------- start entry point--------------"
ls -d $PWD/*

echo "--------- npm install--------------"
npm install
echo "-- sudo npm install electron --unsafe-perm=true --allow-root  -------------------------------------"
sudo npm install chromedriver --unsafe-perm=true --allow-root
echo "-- ls -d PWD -------------------------------------"
ls -d $PWD/*
echo "-- node_modules -------------------------------------"
ls node_modules
echo "-- node_modules/chromedriver -------------------------------------"
ls node_modules/chromedriver
echo "-- lib/chromedrive-------------------------------------"
ls node_modules/chromedriver/lib/chromedriver
echo "-- /root-------------------------------------"
ls /root
echo "---------------------------------------"

#chmod +x ./entrypoint.sh
#chmod +x ./node_modules/nightwatch/bin/nightwatch

./node_modules/nightwatch/bin/nightwatch $@

exit_code=$?

echo "exit code: ${exit_code}"
exit "${exit_code}"

