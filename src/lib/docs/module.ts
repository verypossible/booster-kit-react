import { DocsActionHandlers, DocsState, DocsCollections } from './types'

export const KEY: string = 'types'

const LOAD_TYPES: string = `${KEY}/LOAD_TYPES`
const loadTypes = (payload: DocsCollections) => ({
  payload,
  type: LOAD_TYPES
})

export const actions = {
  loadTypes
}

export const actionTypes = {
  LOAD_TYPES
}

const preloadedState: DocsState = false

export const reducer = (
  state: DocsState = preloadedState,
  action: DocsActionHandlers
): DocsState => {
  switch (action.type) {
    case LOAD_TYPES:
      return action.payload

    default:
      return state
  }
}
