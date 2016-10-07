// ------------------------------------
// Module
// ------------------------------------
const KEY = 'counter'

// ------------------------------------
// Actions
// ------------------------------------
const COUNTER_INCREMENT = `${KEY}/COUNTER_INCREMENT`

function increment (value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const preloadedState = 0
const reducer = (state = preloadedState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export const counter = {
  KEY,
  actions,
  reducer
}
