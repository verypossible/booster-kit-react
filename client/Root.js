import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import AppRouter from '../universal/router'
import routes from '../universal/router/routes'

const Root = ({ store }: Object) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter store={store} routes={routes} />
      </BrowserRouter>
    </Provider>
  )
}

export default Root
