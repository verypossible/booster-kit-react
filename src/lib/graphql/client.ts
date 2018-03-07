import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'

const clientUri = `https://${__GRAPHQL_API__}`

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: clientUri })
})

export default client
