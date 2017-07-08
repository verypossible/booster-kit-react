import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { StoreWithState } from './lib/types'
import Routes from './routes'

interface RootProps {
  store: StoreWithState
}

const Root: React.SFC<RootProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes store={store} />
      </BrowserRouter>
    </Provider>
  )
}

export default Root
