import { DocsActionHandlers, DocsModules, DocsState, Markdown } from '../types'

/** Namespace */
const KEY = 'docs'

/** Actions */
const LOAD_MODULES = `${KEY}/LOAD_MODULES`
const loadModules = (payload: DocsModules) => ({
  payload,
  type: LOAD_MODULES
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
  loadMarkdown,
  loadModules,
  updateMarkdown
}

const actionTypes = {
  LOAD_MARKDOWN,
  LOAD_MODULES,
  UPDATE_MARKDOWN
}

/** State */
const preloadedState: DocsState = {
  modules: false
}

function reducer (
  state: DocsState = preloadedState,
  action: DocsActionHandlers
) {
  switch (action.type) {
    case LOAD_MODULES:
      return {
        ...state,
        modules: [
          ...action.payload
        ]
      }

    case LOAD_MARKDOWN:
    case UPDATE_MARKDOWN:
      return {
        ...state,
        markdown: action.payload
      }

    default:
      return state
  }
}

/** Exports */
export { actions, actionTypes, KEY, reducer }
