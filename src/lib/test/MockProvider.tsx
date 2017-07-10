import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'

import reducers from 'state/stateManager'

interface MockProps {
  children?: any,
  store?: any
}

const WithProvider: React.SFC<MockProps> = ({ children, store }) => {
  const defaultStore = createStore(reducers())
  return (
    <Provider store={store || defaultStore}>
      <BrowserRouter>
        <div>
          {children}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default WithProvider
