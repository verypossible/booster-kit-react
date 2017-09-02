import * as React from 'react'

import * as typesJSON from '../../../typedocs.json'

import { connectDocs } from './data'
import { compose, errorBoundary } from './helpers'
import Routes from './routes'
import { ConnectProps } from './types'

class Docs extends React.Component<ConnectProps> {
  public componentWillMount () {
    const { docs: { modules, markdown }, loadModules, loadMarkdown } = this.props
    if (!modules) {
      loadModules(typesJSON)
    }

    if (!markdown) {
      loadMarkdown()
    }
  }

  public render () {
    return <Routes />
  }
}

const enhance = compose(
  errorBoundary,
  connectDocs({ selector: 'docs' })
)

export default enhance(Docs)
