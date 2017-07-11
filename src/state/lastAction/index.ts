import * as selectors from './selectors'

const KEY: string = 'lastAction'

type Action = {
  payload?: any,
  type: any
}

function reducer (_ = null, action: Action): S {
  return action
}

export {
  KEY,
  reducer,
  selectors
}
