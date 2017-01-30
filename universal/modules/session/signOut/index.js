import { api } from 'lib'
import type { User } from '../types'
import { KEY } from '../key'

const PENDING = `${KEY}/SIGNOUT_PENDING`
const SUCCESS = `${KEY}/SIGNOUT_SUCCESS`
const FAILURE = `${KEY}/SIGNOUT_FAILURE`

function pending () {
  return {
    type: PENDING
  }
}

function success (response: User) {
  return {
    type: SUCCESS,
    payload: response
  }
}

function failure (error: string) {
  return {
    type: FAILURE,
    errors: error
  }
}

export const types = {
  PENDING,
  SUCCESS,
  FAILURE
}

export function signOut () {
  return (dispatch, getState) => {
    dispatch(pending())
    api.deleteSession()
      .then(() => {
        return dispatch(success())
      })
      .catch(error => {
        dispatch(failure(error))
      })
  }
}
