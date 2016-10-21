import { LOCATION_CHANGE } from 'react-router-redux'

const preloadedState = { locationBeforeTransitions: null }

export const routing = (state = preloadedState, { type, payload }) => {
  if (type === LOCATION_CHANGE) {
    return { ...state, locationBeforeTransitions: payload }
  }
  return state
}
