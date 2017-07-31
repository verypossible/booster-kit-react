export const KEY: string = 'session'

const START_SESSION: string = `${KEY}/START_SESSION`
const startSession = (payload: ActiveSession) => ({
  payload,
  type: START_SESSION
})

const CLEAR_SESSION: string = `${KEY}/CLEAR_SESSION`
const clearSession = () => ({
  type: CLEAR_SESSION
})

export const actions = {
  clearSession,
  startSession
}

export const actionTypes = {
  CLEAR_SESSION,
  START_SESSION
}

const preloadedState: Session = false

export const reducer = (
  state: Session = preloadedState,
  action: SessionActionHandlers
): Session => {
  switch (action.type) {
    case START_SESSION:
      return {
        ...action.payload
      }

    case CLEAR_SESSION:
      return preloadedState

    default:
      return state
  }
}
