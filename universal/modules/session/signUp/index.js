import { SubmissionError } from 'redux-form'

import { api, error } from 'lib'

import type { User } from '../types'
import { KEY } from '../key'

const PENDING = `${KEY}/SIGNUP_PENDING`
const SUCCESS = `${KEY}/SIGNUP_SUCCESS`
const FAILURE = `${KEY}/SIGNUP_FAILURE`

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

function failure (errors: Array<Object>) {
  return {
    type: FAILURE,
    errors: errors
  }
}

export const types = {
  PENDING,
  SUCCESS,
  FAILURE
}

export function signUp (values, dispatch) {
  dispatch(pending())
  return new Promise((resolve, reject) => {
    api.postSignUp(values)
      .then(response => {
        dispatch(success(response.data))
        resolve(response)
      })
      .catch(err => {
        dispatch(failure(error.formError(err)))
        reject(new SubmissionError(error.formError(err)))
      })
  })
}
