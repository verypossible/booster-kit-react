/* @flow */
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../universal/routes'

const Root = ({ store }: Object) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes store={store} />
      </BrowserRouter>
    </Provider>
  )
}

export default Root
