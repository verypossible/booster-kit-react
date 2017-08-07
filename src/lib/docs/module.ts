import data from './typedocs.json'

let types = data

if (module.hot) {
  module.hot.accept('./typedocs.json', () => {
    const nextTypes = require('./typedocs.json').default
    types = nextTypes
  })
}

export const KEY = 'docs'

const LOAD_DOCS = `${KEY}/LOAD_DOCS`
const loadTypes = (payload) => ({
  payload,
  type: LOAD_DOCS
})

export const actions = {
  loadTypes
}

export const actionTypes = {
  LOAD_DOCS
}

const preloadedState = {
  types
}

export function reducer (state = preloadedState, action) {
  switch (action.type) {
    case LOAD_DOCS:
      return {
        types: [
          ...action.payload,
          ...state.types
        ]
      }

    default:
      return state
  }
}
