import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import createStore from 'state/createStore'
import Root from './Root'

const store = createStore()

const MOUNT_NODE = document.getElementById('root')

const render = (Component: React.SFC<any>) => {
  ReactDOM.render(
    <AppContainer>
      <Component
        store={store}
      />
    </AppContainer>,
    MOUNT_NODE
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./Root', () => { render(Root) })
}
