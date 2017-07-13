import * as React from 'react'

import { getDisplayName } from '../helpers'

const stateHOC = (WrappedComponent: React.SFC<object>) => {
  const ComponentWithState: React.SFC<object> = ({ ...props }) => (
    <WrappedComponent {...props} />
  )

  ComponentWithState.displayName = getDisplayName(WrappedComponent, 'connectState')

  return ComponentWithState
}

export default stateHOC
