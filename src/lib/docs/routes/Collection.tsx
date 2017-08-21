import * as React from 'react'

import { connectDocs } from '../module'
import { DocsMatch } from '../types'

const Collection: React.SFC<DocsMatch> = ({ match }) => (
  <div>hi {match.params.collection}</div>
)

export default connectDocs({ selector: 'collections' })(Collection)
