import { injectReducer } from 'redux/reducers'
import module from './module'
import container from './container'

const { KEY, actions, reducer } = module

export const counter = {
  actions,
  container,
  KEY,
  reducer
}

export default (store) => {
  injectReducer(store, { key: KEY, reducer: reducer })
  return container
}
