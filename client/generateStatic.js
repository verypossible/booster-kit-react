import React from 'react'
import ReactDOMServer from 'react-dom/server'
// import { createMemoryHistory } from 'history'
import { createMemoryHistory, RouterContext, match } from 'react-router'

import routes from '../universal/routes'
import renderHtml from './renderHtml'

export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log(error)
    }
    callback(null, renderHtml({
      html: ReactDOMServer.renderToString(<RouterContext {...renderProps} />),
      assets: locals.assets
    }))
  })
}
