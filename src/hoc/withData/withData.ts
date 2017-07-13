import {  graphql} from 'react-apollo'

import {
  mutate,
  MutationTypes,
  query,
  QueryTypes
} from 'lib/graphql'

const withQueryWrapper = () => (
  selectQuery,
  config?: object
) => {
  const matchQuery = selectQuery(query)
  return graphql<QueryTypes>(matchQuery, config)
}

const withMutationWrapper = () => (
  selectMutation,
  config?: object
) => {
  const matchMutation = selectMutation(mutate)
  return graphql<MutationTypes>(matchMutation, config)
}

export default {
  mutate: withMutationWrapper(),
  query: withQueryWrapper()
}
