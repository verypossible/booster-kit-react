import * as React from 'react'

import { getDisplayName } from '../helpers'

const stateHOC = (WrappedComponent: any) => {
  const ComponentWithState: React.SFC<any> = ({ ...props }) => (
    React.createElement(WrappedComponent, { ...props })
  )

  ComponentWithState.displayName = getDisplayName(WrappedComponent, 'connectState')

  return ComponentWithState
}

export default stateHOC
