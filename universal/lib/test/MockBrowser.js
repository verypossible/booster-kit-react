import React from 'react'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'store/reducers'

export function MockBrowser ({ children }: any) {
  const store = createStore(reducers())
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  )
}
