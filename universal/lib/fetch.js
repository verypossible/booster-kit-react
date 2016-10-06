import fetch from 'isomorphic-fetch'

export function parseJSON (response) {
  return response.json()
}

export function hostUrl () {
  const host = __HOST__
  const protocol = __PROTOCOL__
  const port = __PORT__
  return `${protocol}://${host}:${port}`
}

export function postJSON (route, obj) {
  return fetch(hostUrl() + route, {
    method: 'post',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
}

export function getJSON (route) {
  return fetch(hostUrl() + route)
}

export const getClientError = errors => {
  if (!errors) {
    return
  }
  const error = errors[0].message
  if (!error || error.indexOf('{"_error"') === -1) {
    return {_error: 'Server query error'}
  }
  return JSON.parse(error)
}