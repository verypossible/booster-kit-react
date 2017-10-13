# Core Scripts
These are the scripts you'll use on a regular basis. For an exhaustive list, reference `package.json`:

```bash
# Syncs the GraphQL schema from the server, generates types from the schema,
# empties the build directory, generates the jest config.json,
# and triggers webpack to build production assets.
# It's helpful to run this before opening a PR to make sure
# the production bundle builds correctly:
> yarn build

# Cleans the yarn cache and force installs fresh packages:
> yarn clean

# Generates a fresh typedocs.json file for the module docs:
> yarn docs

# Lints the source code:
> yarn lint

# Run lint and test before triggering a CI build to catch as much as you can ahead of time:
> yarn preflight

# Syncs the GraphQl schema from the server, generates types from the schema,
# and starts the webpack dev server.
> yarn start

# Runs the full test suite and includes a coverage report:
> yarn test

# Runs the feature (acceptance) tests. The server has to be running in order for
# Nightmare to browse through the app:
> yarn test:features

# Runs the spec tests:
> yarn test:specs

# Runs the test suite in watch mode:
> yarn test:watch
```
