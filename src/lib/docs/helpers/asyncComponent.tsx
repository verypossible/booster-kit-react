import * as React from 'react'

import getDisplayName from './getDisplayName'

interface Config {
  component: Promise<React.ReactNode>
}

type Component = boolean | React.ReactNode

interface State {
  component: Component
}

const asyncWrapper = ({ component }: Config) => (WrappedComponent) => {
  class AsyncComponent extends React.Component<any, State> {
    public static displayName = getDisplayName(WrappedComponent, 'async')
    public componentWillMount () {
      component
        .then((loadedComponent) => this.setState({ component: loadedComponent.default }))
        .catch((err) => console.error(err))
    }

    public render () {
      return (
        <WrappedComponent
          component={this.state && this.state.component}
          {...this.props}
        />
      )
    }
  }

  return AsyncComponent
}

export default asyncWrapper
