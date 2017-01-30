import * as http from '../http'
import endpoints from './endpoints'

const url = __SERVER_URL__
const api = endpoints[__SERVER_TYPE__]

const headers = (token) => {
  return {
    Authorization: token
  }
}

// POST Requests
export const postSignUp = (data, token) => {
  return http.post(url, headers(token), api.signUp, { user: data })
}

export const postLogIn = (data, token) => {
  return http.post(url, headers(token), api.session, { session: data })
}

export const postResetPassword = (data, token) => {
  return http.post(url, headers(token), api.resetPassword, { user: data })
}

// GET Requests
export const getSession = (token) => {
  return http.get(url, headers(token), api.currentSession)
}

// DELETE Requests
export const deleteSession = (token) => {
  return http.del(url, headers(token), api.session)
}
