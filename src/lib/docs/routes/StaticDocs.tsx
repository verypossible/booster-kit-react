import * as React from 'react'

import { connectDocs } from '../module'
import { DocsMatch } from '../types'

const StaticDocs: React.SFC<DocsMatch> = ({ match }) => (
  <div>hi {match.params.static}</div>
)

export default connectDocs({ selector: 'statics' })(StaticDocs)
