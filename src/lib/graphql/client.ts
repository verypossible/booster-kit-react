import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: __GRAPHQL_API__
})

console.log(__GRAPHQL_API__)

const client = new ApolloClient({
  networkInterface
})

export default client
