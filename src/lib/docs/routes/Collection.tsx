import * as React from 'react'
import { Route } from 'react-router-dom'

import { connectDocs } from '../module'
import { ConnectProps, DocsCollections, DocsMatch } from '../types'

interface Props {
  collections: DocsCollections,
  match: DocsMatch
}

const Collection: React.SFC<Props> = ({ collections, match }) => (
  <div>hi {match.params.collection}</div>
)

export default connectDocs(Collection)
