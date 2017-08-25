import stateManager from 'redux-persist-state-manager'

import reducers from './reducers'

const stateMigrations = {
  1: (state) => state
}

const VERSION = 1

const stateWithMigrations = stateManager(
  reducers,
  { version: VERSION },
  stateMigrations
)

export default stateWithMigrations
