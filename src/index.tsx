import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App, { IApp } from './App'
import createStore from './state/createStore'

const store = createStore()

const MOUNT_NODE = document.getElementById('root')

const render = (Component: React.SFC<IApp>) => {
  ReactDOM.render(<Component {...store} />, MOUNT_NODE)
}

render(App)
