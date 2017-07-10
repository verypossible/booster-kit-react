import { ThunkAction } from 'redux-thunk'

import { D } from 'lib/types'

// ------------------------------------
// State Key
// ------------------------------------
export const KEY = 'counter'

// ------------------------------------
// Actions
// ------------------------------------
const COUNTER_INCREMENT = `${KEY}/COUNTER_INCREMENT`

type Action = {
  payload?: CounterState,
  type: 'counter/COUNTER_INCREMENT'
}

const increment = (value: number = 1) => ({
  payload: value,
  type: COUNTER_INCREMENT
})

const doubleAsync = (): ThunkAction<Promise<string>, S, null> =>
  (dispatch: D<S>, getState: () => S) => new Promise((resolve) => {
  setTimeout(() => {
    dispatch(increment(getState().counter))
    resolve()
  }, 200)
})

export const actions = {
  doubleAsync,
  increment
}

export const actionTypes = {
  COUNTER_INCREMENT
}

// ------------------------------------
// Reducer
// ------------------------------------
const preloadedState: CounterState = 0

export const reducer = (
  state: CounterState = preloadedState,
  action: Action
): CounterState => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + action.payload

    default:
      return state
  }

}
