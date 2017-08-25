import * as React from 'react'

import { connectDocs } from '../data'
import { DocsMatch } from '../types'

const Collection: React.SFC<DocsMatch> = ({ match, ...rest }) => (
  <div>hi {match.params.collection}{console.log(rest, 'REST')}</div>
)

export default connectDocs({ selector: 'activeCollection' })(Collection)
