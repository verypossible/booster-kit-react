/* @flow */
/* eslint react/no-danger:0 */
import React from 'react'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom-stream/server'
import Helmet from 'react-helmet'

const PROD = process.env.NODE_ENV === 'production'

type Props = {
  store: Object,
  assets: Object,
  renderProps: Object
}

// Injects the server rendered state and app into a basic html template
export const Html = ({ store, assets, renderProps }: Props) => {
  const head = Helmet.rewind()
  const attrs = head.htmlAttributes.toComponent()
  const root = PROD && renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>)
  return (
    <html {...attrs}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {PROD && <link rel='stylesheet' href='/static/prerender.css' type='text/css' />}
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
      </head>
    </html>
  )
}

export default Html
