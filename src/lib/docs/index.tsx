import * as React from 'react'
import { Route } from 'react-router-dom'

import { actions, actionTypes, KEY, reducer } from './data'

interface State {
  docs: any
}

async function getDocs () {
  const Docs = await import(/* webpackChunkName: "docs" */ './container')
  return Docs.default
}

class AsyncDocs extends React.Component<any, State> {
  public static displayName = 'Docs'
  public componentWillMount () {
    getDocs()
      .then(docs => this.setState({ docs }))
  }

  public render () {
    return <Route path='/docs' component={this.state && this.state.docs} />
  }
}

export {
  actions,
  actionTypes,
  KEY,
  reducer
}

export default AsyncDocs
