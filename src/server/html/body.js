/* @flow */
/* eslint react/no-danger:0 */
import React from 'react'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom-stream/server'

const PROD = process.env.NODE_ENV === 'production'

type Props = {
  store: Object,
  assets: Object,
  renderProps: Object
}

// Injects the server rendered state and app into a basic html template
export const Html = ({ store, assets, renderProps }: Props) => {
  const { manifest, app, vendor } = assets || {}
  const preloadedState = `window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}`
  const root = PROD && renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>)
  return (
    <html>
      <body>
        <script dangerouslySetInnerHTML={{__html: preloadedState}} />
        {PROD ? <main role='main' id='root' dangerouslySetInnerHTML={{__html: root}} /> : <main id='root' />}
        {PROD && <script dangerouslySetInnerHTML={{__html: manifest.text}} />}
        {PROD && <script src={vendor.js} />}
        <script src={PROD ? app.js : '/static/app.js'} type='text/javascript' />
      </body>
    </html>
  )
}
