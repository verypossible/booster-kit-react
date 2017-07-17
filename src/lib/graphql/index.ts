import mutate from './mutations'
import query from './queries'

/* Interfaces */
import {
  CreatePageMutation,
  GetAllPagesQuery,
  LoginUserWithAuth0Input
} from './schema'

/* Test Util */
type Graphql = CreatePageMutation & GetAllPagesQuery & LoginUserWithAuth0Input

/* Interface exports to be in conjunction with Queries and Mutations */
export {
  CreatePageMutation,
  GetAllPagesQuery,
  Graphql,
  LoginUserWithAuth0Input
}

/* Queries and Mutations */
export {
  mutate,
  query
}
