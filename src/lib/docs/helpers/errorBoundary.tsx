import * as React from 'react'

import { getDisplayName } from './index'

interface State {
  hasError?: boolean
}

const errorWrapper = WrappedComponent => {
  class ErrorBoundary extends React.Component<any, State> {
    public static displayName = getDisplayName(WrappedComponent, 'errorBoundary')

    // public componentDidCatch () {
    //   this.setState({ hasError: true })
    // }

    public render () {
      if (this.state && this.state.hasError) {
        return (
          <div>
            <h1>Something went wrong...</h1>
          </div>
        )
      }

      return <WrappedComponent {...this.props} />
    }
  }

  return ErrorBoundary
}

export default errorWrapper
