import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import createRoutes from 'routes'

class AppContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount () {
    const { history, store } = this.props
    console.log(store)

    // Use history to update store with location
    this.unsubscribe = history.listen(location => {
      store.dispatch({
        type: 'LOCATION_CHANGE',
        location
      })
    })
  }

  componentWillUnmount () {
    this.unsubscribe && this.unsubscribe()
  }

  render () {
    const { store, history } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={history} children={createRoutes(store)} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
