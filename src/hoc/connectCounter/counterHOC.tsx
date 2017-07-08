import * as React from 'react'

import { getDisplayName } from '../helpers'

const counterHOC = (WrappedComponent: any) => {
  const ComponentWithCounter: React.SFC<any> = ({ ...props }) => (
    React.createElement(WrappedComponent, { ...props })
  )

  ComponentWithCounter.displayName = getDisplayName(WrappedComponent, 'connectCounter')

  return ComponentWithCounter
}

export default counterHOC
