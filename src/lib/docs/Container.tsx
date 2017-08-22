import * as React from 'react'
import { Route } from 'react-router-dom'

import { compose, errorBoundary } from './helpers'
import { connectDocs } from './module'
import Routes from './routes'
import { ConnectProps } from './types'

class Docs extends React.Component<ConnectProps> {
  public componentWillMount () {
    const { docs: { collections, markdown, types }, loadData, loadMarkdown } = this.props
    if (!collections) {
      loadData(types)
    }

    if (!markdown) {
      loadMarkdown()
    }
  }

  public render () {
    return (
      <Route path='/docs' render={(router) => <Routes {...router} {...this.props} />} />
    )
  }
}

const enhance = compose(
  errorBoundary,
  connectDocs({ selector: 'collections' })
)

export default enhance(Docs)
