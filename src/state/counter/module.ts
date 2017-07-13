import { ThunkAction } from 'redux-thunk'

import { Dispatch } from 'lib/types'

// ------------------------------------
// State Key
// ------------------------------------
export const KEY: string = 'counter'

// ------------------------------------
// Actions
// ------------------------------------
const COUNTER_INCREMENT = `${KEY}/COUNTER_INCREMENT`

const increment = (value: number = 1) => ({
  payload: value,
  type: COUNTER_INCREMENT
})

const doubleAsync = (): ThunkAction<Promise<string>, State, null> =>
  (dispatch: Dispatch<State>, getState: () => State) => new Promise((resolve) => {
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
const preloadedState: Counter = 0

export const reducer = (
  state: Counter = preloadedState,
  action: CounterActions
): Counter => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + action.payload

    default:
      return state
  }

}
