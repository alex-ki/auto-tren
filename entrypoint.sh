#!/bin/bash
echo "--------- start entry point--------------"
npm install

echo "---------------------------------------"
ls
echo "---------------------------------------"
ls .
echo "---------------------------------------"
ls /root
echo "---------------------------------------"

chmod +x ./entrypoint.sh
chmod +x ./node_modules/nightwatch/bin/nightwatch

./node_modules/nightwatch/bin/nightwatch $@

exit_code=$?

echo "exit code: ${exit_code}"
exit "${exit_code}"

