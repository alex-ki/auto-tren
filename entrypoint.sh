#!/bin/bash
echo "--------- start entry point--------------"


ls
echo "---------------------------------------"
ls .
echo "---------------------------------------"
ls /root
echo "---------------------------------------"

#chmod +x ./entrypoint.sh
#chmod +x ./node_modules/nightwatch/bin/nightwatch

/root/node_modules/nightwatch/bin/nightwatch $@

exit_code=$?

echo "exit code: ${exit_code}"
exit "${exit_code}"

