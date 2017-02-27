import { SubmissionError } from 'redux-form'

import { api, error } from 'lib'

import type { User } from '../types'
import { KEY } from '../key'

const PENDING = `${KEY}/RESET_PASSWORD_PENDING`
const SUCCESS = `${KEY}/RESET_PASSWORD_SUCCESS`
const FAILURE = `${KEY}/RESET_PASSWORD_FAILURE`

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

function failure (error: Array<Object>) {
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

export function resetPassword (values, dispatch) {
  dispatch(pending())
  return new Promise((resolve, reject) => {
    api.postResetPassword(values)
    .then(response => {
      dispatch(success(response.data))
    })
    .catch(err => {
      dispatch(failure(error.formError(err)))
      reject(new SubmissionError(error.formError(err)))
    })
  })
}
