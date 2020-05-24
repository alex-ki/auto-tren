#!/bin/bash

./node_modules/nightwatch/bin/nightwatch $@

exit_code=$?

echo "exit code: ${exit_code}"
exit "${exit_code}"

