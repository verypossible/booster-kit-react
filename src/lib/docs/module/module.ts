// import data from '../data/dataSubscriber'
import typesJSON from '../typedocs.json'
import { DocsActionHandlers, DocsCollections, DocsState } from '../types'

/** Namespace */
const KEY = 'docs'

/** Actions */
const LOAD_COLLECTIONS = `${KEY}/LOAD_COLLECTIONS`
const loadCollections = (payload: DocsCollections) => ({
  payload,
  type: LOAD_COLLECTIONS
}) as DocsActionHandlers

const actions = {
  loadCollections
}

const actionTypes = {
  LOAD_COLLECTIONS
}

/** State */
const preloadedState: DocsState = {
  collections: false,
  types: typesJSON
}

function reducer (
  state: DocsState = preloadedState,
  action: DocsActionHandlers
) {
  switch (action.type) {
    case LOAD_COLLECTIONS:
      return {
        ...state,
        collections: [
          ...action.payload
        ]
      }

    default:
      return state
  }
}

/** Exports */
export { actions, actionTypes, KEY, reducer }
