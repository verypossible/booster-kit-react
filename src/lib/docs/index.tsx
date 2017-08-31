import * as React from 'react'
import { Route } from 'react-router-dom'

import { actions, actionTypes, KEY, reducer } from './data'

interface State {
  docs: any
}

class AsyncDocs extends React.Component<any, State> {
  public static displayName = 'Docs'
  public componentWillMount () {
     import(/* webpackChunkName: "docs" */ './container')
      .then(docs => this.setState({ docs: docs.default }))
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
