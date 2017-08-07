import * as React from 'react'

import DocsWrapper from './components/Wrapper'

import { DocsCollections } from './types'

interface Props {
  collections: DocsCollections,
  loadTypes: () => void,
  match: RouterMatch
}
console.log('hi')
class DocsController extends React.Component<Props, State>  {
  public componentWillMount () {
    if (!this.props.collections) {
      console.log(this.props)
      this.props.loadTypes()
    }
  }

  public render () {
    return (
      <DocsWrapper
        {...this.props}
      />
    )
  }
}

export default DocsController
