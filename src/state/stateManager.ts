import stateManager from 'redux-persist-state-manager'

import reducers from './reducers'

const stateMigrations = {
  1: () => ({}),
  2: (state) => state
}

const VERSION = 2

export default () => stateManager(
  reducers,
  { version: VERSION },
  stateMigrations
)
