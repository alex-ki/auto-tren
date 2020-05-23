#!/bin/bash

chmod +x /root/entrypoint.sh
chmod +x /root/node_modules/nightwatch/bin/nightwatch

/root/node_modules/nightwatch/bin/nightwatch $@

exit_code=$?

echo "exit code: ${exit_code}"
exit "${exit_code}"

