/* @flow */
import React from 'react'
import { applyRouterMiddleware, Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import routes from '../universal/routes'
import { syncHistoryWithStore } from 'react-router-redux'
import { ensureState } from 'redux-optimistic-ui'
import { useScroll } from 'react-router-scroll'

type Props = {
  store: Object
}

const Root = ({store}: Props) => {
  const history = syncHistoryWithStore(
    browserHistory, store, {selectLocationState: state => ensureState(state).get('routing')}
  )

  return (
    <Provider store={store}>
      <Router
        history={history}
        routes={routes(store)}
        render={applyRouterMiddleware(useScroll())}
      />
    </Provider>
  )
}

export default Root
