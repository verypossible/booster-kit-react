import * as React from 'react'

import { connectDocs } from './module'
import { DocsEntry } from './routes'
import { ConnectProps } from './types'

class DocsContainer extends React.Component<ConnectProps> {
  public componentWillMount () {
    const { docs: { types }, loadData } = this.props
    loadData(types)
  }

  public primaryNav = () => {
    const { docs } = this.props
    const collections = docs.collections
    return collections && collections.map(({ collection }) => ({
      id: `docs-${collection}`,
      text: collection,
      to: `/docs/${collection}`
    }))
  }

  public render () {
    return (
      <DocsEntry
        primaryNav={this.primaryNav()}
        {...this.props}
      />
    )
  }
}

export default connectDocs(DocsContainer)
