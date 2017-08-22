import typesJSON from '../typedocs.json'
import { DocsActionHandlers, DocsCollections, DocsState, Markdown } from '../types'

/** Namespace */
const KEY = 'docs'

/** Actions */
const LOAD_COLLECTIONS = `${KEY}/LOAD_COLLECTIONS`
const loadCollections = (payload: DocsCollections) => ({
  payload,
  type: LOAD_COLLECTIONS
}) as DocsActionHandlers

const LOAD_MARKDOWN = `${KEY}/LOAD_MARKDOWN`
const loadMarkdown = (payload: Markdown[]) => ({
  payload,
  type: LOAD_MARKDOWN
})

const UPDATE_MARKDOWN = `${KEY}/UPDATE_MARKDOWN`
const updateMarkdown = (payload: Markdown) => ({
  payload,
  type: UPDATE_MARKDOWN
})

const actions = {
  loadCollections,
  loadMarkdown,
  updateMarkdown
}

const actionTypes = {
  LOAD_COLLECTIONS,
  LOAD_MARKDOWN,
  UPDATE_MARKDOWN
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

    case LOAD_MARKDOWN:
      return {
        ...state,
        markdown: action.payload
      }

    case UPDATE_MARKDOWN:
      return {
        ...state,
        markdown: state.markdown.map((staticDoc) => (
          (staticDoc.path === action.payload.path) ? action.payload : staticDoc)
        )
      }

    default:
      return state
  }
}

/** Exports */
export { actions, actionTypes, KEY, reducer }
