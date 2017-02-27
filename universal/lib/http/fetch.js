import axios from 'axios'
import { checkStatus } from './checkStatus'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function buildHeaders (headers) {
  return {
    ...headers,
    ...defaultHeaders
  }
}

function buildPath (api, endpoint) {
  const path = `${api}/${endpoint}`
  return path
}

export function parseJSON (response) {
  return response.json()
}

export function post (api, headers, endpoint, data) {
  return axios(buildPath(api, endpoint), {
    method: 'POST',
    headers: buildHeaders(headers),
    data: data
  })
  .then(checkStatus)
}

export function get (api, headers, endpoint) {
  return axios(buildPath(api, endpoint), {
    headers: buildHeaders(headers)
  })
  .then(checkStatus)
}

export function del (api, headers, endpoint) {
  return axios(buildPath(api, endpoint), {
    method: 'DELETE',
    headers: buildHeaders(headers)
  })
  .then(checkStatus)
}

export const returnErrors = errors => {
  if (!errors) {
    return
  }
  const error = errors[0].message
  if (!error || error.indexOf('{"_error"') === -1) {
    return {_error: 'Server query error'}
  }
  return JSON.parse(error)
}
