import {
  CreatePageMutation
} from '../schema'

import * as createPage from './createPage.gql'

export type Mutations = CreatePageMutation   // & NewMutationA & NewMutationB

export default {
  createPage
}
