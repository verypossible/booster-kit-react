/* eslint-disable no-console, no-use-before-define */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createMemoryHistory } from 'react-router'

import routes from '../universal/routes'
import configureStore from '../universal/store/configureStore'
import App from '../universal/containers/AppContainer'

// This is fired every time the server side receives a request

export default function createSSR (req, res) {
  // Query our mock API asynchronously
  const preloadedState = { routes: '/' }

  // Create a new Redux store instance
  const store = configureStore(preloadedState)

  // Render the component to a string
  const html = renderToString(
    <App store={store} history={createMemoryHistory(routes)} />
  )

  // Grab the initial state from our Redux store
  const finalState = store.getState()

  // Render the page
  function renderFullPage (html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
          </script>
          <script src="/static/bundle.js"></script>
        </body>
      </html>
    `
  }

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState))
}
