# This script is used by CircleCI to execute automated tests.

# Build all assets
yarn run build

# Boot a static file server
php -S localhost:3001 -t build/ &

# Save the PID of the server to a variable
APP_TEST_PID=$(echo $!)

# Execute tests
PORT=3001 CI=true yarn test

# Kill the server
kill $APP_TEST_PID
