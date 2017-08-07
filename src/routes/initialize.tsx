import * as React from 'react'

/** Async Routes */
import docsRoutes from './docs'

interface State {
  initialized: boolean
}

/**
 *   Use this HOC to initialize the app before the routes are rendered.
 *   You can do things like building routes, verifying the session, or
 *   other async things that need to be done before the routes get rendered.
 *
 *   Currently, we are using this to handle async route generation for the docs
 *   and merge the new routes with the static routes.
 *
 *   We have to set the state for the new routes to trigger a re-render downstream
 *   to intake the new routes.
 */
const initializeRoutesWrapper = <OP extends {}>(
  WrappedComponent: React.SFC<OP>
) => {
  class InitializeRoutes extends React.Component<OP, State> {
   constructor (props: InitializeProps) {
     super(props)

     this.state = {
       asyncRoutes: []
     }
   }

   public componentWillMount () {
     this.asyncRoutes()
   }

   public routesWithAsync = (routes) => {
     return [
       ...routes,
       ...this.state.asyncRoutes
     ]
   }

   public asyncRoutes = () => {
    docsRoutes().then((docs) => this.setState({ asyncRoutes: [
      ...docs
    ]}))
   }

    public render () {
      console.log('hi')
      const { routes, ...props } = this.props
      const mergeAsyncRoutes = this.routesWithAsync(routes)
      return <WrappedComponent routes={mergeAsyncRoutes} {...props} />
    }
  }

  return InitializeRoutes
}

export default initializeRoutesWrapper
