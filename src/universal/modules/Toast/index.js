import module from './module'
import container from './container'

const { actions, KEY, reducer } = module

export const toast = {
  actions,
  container,
  KEY,
  reducer
}
