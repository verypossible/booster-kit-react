import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'store/reducers'

export function MockProvider ({ children }: any) {
  const store = createStore(reducers())
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
