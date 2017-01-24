import nightmare from 'nightmare'
import url from 'url'

import { options, url as BASE_URL } from '../browser'

export default function (path = '', query = {}) {
  const location = url.resolve(BASE_URL, path)
  return (
    nightmare(options)
      .goto(location)
  )
}
