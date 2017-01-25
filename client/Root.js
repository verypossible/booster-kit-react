/* @flow */
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import AppRouter from '../universal/router'

const Root = ({ store }: Object) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter store={store} />
      </BrowserRouter>
    </Provider>
  )
}

export default Root
