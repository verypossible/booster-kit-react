import * as localForage from 'localforage'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

/* For Subscriptions
import { addGraphQLSubscriptions, SubscriptionClient } from 'subscriptions-transport-ws'

const clientWs = `wss://${__GRAPHQL_API__}`
*/

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

const clientUri = `https://${__GRAPHQL_API__}`

const makeNetworkInterface = (history: RouterHistory) => {
  /* Set the network interface object */
  const networkInterface = createNetworkInterface({
    uri: clientUri
  })

  /* Apply auth middleware to the request / response cycle */
  networkInterface.use([{
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      let token = false as Token

      /**
       *   We get the token from the location during login so we can skip the delay of the promise of
       *   setting and then getting the token from local storage.
       */
      const tokenFromLocation = (
        history.location.state && (history.location.state.idToken || history.location.state.token)
      )

      if (tokenFromLocation) {
        token = tokenFromLocation
      }

      /** If the session has been rehydrated, get the token from storage */
      if (!token) {
        localForage.getItem('reduxPersist:session')
          .then((value: string) => {
            const session = JSON.parse(value)
            if (session && session.idToken) {
              token = session.idToken
            }
          })
          .catch(err => logger.log.error('Unable to get authentication token from localForage', { error: err }))
      }

      /** We want to restrict certain operations to the client token - specifically creating new users */
      const useClientToken = (
        req.request.operationName === 'CreateUser'
      )

      if (useClientToken) {
        req.options.headers.authorization = `Bearer ${__CLIENT_TOKEN__}`
      }

      if (!useClientToken && token) {
        req.options.headers.authorization = `Bearer ${token}`
      }

      next()
    }
  }])

  if (__DEBUG__) {
    networkInterface.useAfter([{
      applyAfterware (response, next) {
        logger.log.info('Graphql Network Interface', response)
        next()
      }
    }])
  }

  return networkInterface
}

const initClient = networkInterface =>
  new ApolloClient({ networkInterface })

const client = (history?: RouterHistory) => {
  const networkInterface = makeNetworkInterface(history)
  /** We can't use subscriptions under test as there is no native support for Websockets in the test env */
  if (__TEST__) {
    return initClient(networkInterface)
  }

  /** Use this network interface in initClient when using subscriptions */
  // const wsClient = new SubscriptionClient(clientWs)
  //
  // const networkInterfaceWithSubscriptions = (h: RouterHistory) => {
  //   const networkInterface = makeNetworkInterface(h)
  //   return addGraphQLSubscriptions(networkInterface, wsClient)
  // }

  return initClient(networkInterface)
}

export default client
