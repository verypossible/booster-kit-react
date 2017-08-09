import data from '../data/dataSubscriber'
import { DocsActionHandlers, DocsCollections, DocsState } from '../types'

import connectDocs from './connectDocs'

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
  types: data()
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
export { actions, actionTypes, connectDocs, KEY, reducer }
