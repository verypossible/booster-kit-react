import * as React from 'react'

import { ExternalMarkdown } from '../components'
import { connectDocs } from '../data'
import { ConnectProps } from '../types'

const Part: React.SFC<ConnectProps> = ({ activePart, match }) =>
  !activePart ? null : (
    (match.params.collection !== 'module' && <ExternalMarkdown markdown={activePart.content} />) ||
    (<div>hello {match.params.part}</div>)
  )

export default connectDocs({ selector: 'activePart' })(Part)
