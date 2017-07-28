import * as React from 'react'

import connectState from 'hoc/connectState'
import { verifySocialSession, VerifySocialSession } from 'hoc/withAuth'
import { compose } from 'lib/helpers'
import { withRouter } from 'lib/router'

export interface InitializeProps {
  initialized: boolean
}

interface InjectedProps extends VerifySocialSession {
  storedSession: boolean | LastAction
}

interface State {
  initialized: boolean
}

/**
 *   Use this HOC to initialize the app before the routes are rendered.
 *   You can do things like building routes, verifying the session, or
 *   other async things that need to be done before the routes get rendered.
 */
const initializeRoutesWrapper = <OP extends {}>(
  WrappedComponent: React.SFC<OP & InitializeProps>
) => {
  type Result = OP & InjectedProps
  class InitializeRoutes extends React.Component<Result, State> {
    constructor (props: Result) {
      super(props)

      this.state = {
        initialized: false
      }
    }

    public componentWillReceiveProps (next) {
      const uninitialized = !this.state.initialized
      const rehydratedSession = next.storedSession
      if (uninitialized && rehydratedSession) {
        const session = next.storedSession.payload.session
        this.verifySocial(session)
        this.anonymousSession(session)
      }
    }

    /**
     *   Use the token from the rehydrated state to login to the server with loginSocial.
     *   If there is an error authenticating, it will redirect to the redirectOnError param.
     */
    public verifySocial = (session: Session) => {
      if (session && session.sessionType === 'social') {
        this.props.verifySocialSession(session.token)
          .then(() => this.initialize())
      }
    }

    /**
     *   If there is no stored session, go ahead and initialize the session.
     */
    public anonymousSession = (session: Session) => {
      if (!session) {
        this.initialize()
      }
    }

    public initialize = () => this.setState({ initialized: true })

    public render () {
      return <WrappedComponent initialized={this.state.initialized} {...this.props} />
    }
  }

  const enhance = compose(
    connectState(
      (selectors: Selectors) => ({
        storedSession: selectors.actionRehydrate
      })
    ),
    verifySocialSession({
      redirectOnError: '/login'
    })
  )

  return enhance(InitializeRoutes)
}

export default withRouter(initializeRoutesWrapper)
