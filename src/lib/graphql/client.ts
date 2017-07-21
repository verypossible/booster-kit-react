import localForage from 'localforage'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

import logger from '../logger'

interface RouterHistory {
  location: {
    state?: {
      idToken?: string,
      token?: string
    }
  }
}

type Token = false | string

const network = (history: RouterHistory) => {
  /* Set the network interface object */
  const networkInterface = createNetworkInterface({
    uri: __GRAPHQL_API__
  })

  /* Apply auth middleware to the request / response cycle */
  networkInterface.use([{
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      let token = false as Token

      const tokenFromLocation = (
        history.location.state && (history.location.state.idToken || history.location.state.token)
      )

      if (tokenFromLocation) {
        token = tokenFromLocation
      }

      if (!token) {
        localForage.getItem('reduxPersist:session')
          .then((value: string) => {
            const session = JSON.parse(value)
            if (session && session.idToken) {
              token = session.idToken
            }
          })
          .catch((err) => logger.log.error('Unable to get authentication token from localForage', { error: err }))
      }

      if (token) {
        req.options.headers.authorization = `Bearer ${token}`
      }

      next()
    }
  }])

  networkInterface.useAfter([{
    applyAfterware (response, next) {
      logger.log.info('Graphql Network Interface', response)
      next()
    }
  }])

  return networkInterface
}

const client = (history?: RouterHistory) => new ApolloClient({
  networkInterface: network(history)
})

export default client
