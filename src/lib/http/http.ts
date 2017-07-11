import axios from 'axios'

import { HTTP } from './types'
import validateStatus from './validateStatus'

export default function ({ method, url, data: postData, params, requestHeaders }: HTTP) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...requestHeaders
  }

  const data = JSON.stringify(postData)

  const defaultPayload = {
    data,
    headers,
    method,
    url,
    validateStatus
  }

  let payload = defaultPayload
  // let auth = {}

  if (params) {
    payload = {
      ...defaultPayload,
      url: `${url}?${params}`
    }
  }

  // if (url.includes('arbitraryString')) {
  //   auth = {
  //     username: __CONFIG_USERNAME__,
  //     password: __CONFIG_TOKEN__
  //   }
  //
  //   payload = {
  //     ...payload,
  //     auth
  //   }
  // }

  if (method === 'POST') {
    payload = {
      ...payload
    }
  }

  return axios(payload)
}
