import * as selectors from './selectors'

const KEY: string = 'lastAction'

function reducer (_ = null, action: LastAction): LastAction {
  return action
}

export {
  KEY,
  reducer,
  selectors
}
