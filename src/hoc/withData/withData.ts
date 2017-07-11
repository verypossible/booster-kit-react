import { mutate, query } from 'lib/graphql'

import withRequestHOC from './requestHOC'

const withQueryWrapper = () => (selectQuery, config) => {
  const matchQuery = selectQuery(query)
  return withRequestHOC(matchQuery, config)
}

const withMutationWrapper = () => (selectMutation, config) => {
  const matchMutation = selectMutation(mutate)
  return withRequestHOC(matchMutation, config)
}

export default {
  mutate: withMutationWrapper(),
  query: withQueryWrapper()
}
