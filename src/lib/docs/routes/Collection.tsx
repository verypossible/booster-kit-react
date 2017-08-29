import * as React from 'react'

import { ExternalMarkdown } from '../components'
import { connectDocs } from '../data'
import { ConnectProps } from '../types'

const Collection: React.SFC<ConnectProps> = ({ content, match }) =>
  !content ? null : (
    (match.params.collection !== 'modules' && <ExternalMarkdown markdown={content} />) ||
    (<div>hi {match.params.collection}</div>)
  )

export default connectDocs({ selector: 'activeCollection' })(Collection)
