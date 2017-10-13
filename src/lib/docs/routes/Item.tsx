import * as React from 'react'

import { ExternalMarkdown } from '../components'
import { connectDocs } from '../data'
import { ConnectProps } from '../types'

import Module from './Module'

const Item: React.SFC<ConnectProps> = ({ activeItem, match, ...props }) =>
  !activeItem ? null : (
    (match.params.collection !== 'modules' && <ExternalMarkdown markdown={activeItem.content} />) ||
    (<Module activeItem={activeItem} match={match} {...props} />)
  )

export default connectDocs({ selector: 'item' })(Item)
