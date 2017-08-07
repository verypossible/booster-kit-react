import * as React from 'react'

import DocsWrapper from './components/Wrapper'

import { DocsCollections } from './types'

interface Props {
  collections: DocsCollections,
  loadTypes: () => void,
  match: RouterMatch
}

interface State {
  view?: string
}

class DocsController extends React.Component<Props, State>  {
  public componentWillMount () {
    this.props.loadTypes()
  }

  public navigate = (event) => this.setState({ view: event.target.value })

  public render () {
    return (
      <DocsWrapper
        navigate={this.navigate}
        view={this.state && this.state.view}
        {...this.props}
      />
    )
  }
}

export default DocsController
