import type { State } from './types'

import { types as LOGIN } from './logIn'
import { types as SIGNOUT } from './signOut'
import { types as SIGNUP } from './signUp'
import { types as RESET } from './resetPassword'

const preloadedState = {
  user: {},
  isAuthed: false,
  errors: null
}

export const reducer = (state: State = preloadedState, action: any): State => {
  switch (action.type) {
    case RESET.PENDING:
    case SIGNUP.PENDING:
    case SIGNOUT.PENDIING:
    case LOGIN.PENDING:
      return {
        ...state,
        isFetching: true,
        errors: null
      }

    case SIGNUP.SUCCESS:
    case LOGIN.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthed: true,
        ...action.payload
      }

    case RESET.SUCCESS:
    case SIGNOUT.SUCCESS:
      return {
        isFetching: false,
        isAuthed: false,
        errors: null
      }

    case SIGNOUT.FAILURE:
    case RESET.FAILURE:
    case SIGNUP.FAILURE:
    case LOGIN.FAILURE:
      return {
        ...state,
        isFetching: false,
        ...action.errors
      }

    default:
      return state
  }
}
