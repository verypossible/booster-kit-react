import {
  CreatePageMutation
} from '../schema'

import * as createPage from './createPage.gql'

export type MutationTypes = CreatePageMutation

export interface Mutations {
  createPage: CreatePageMutation
}

export default {
  createPage
}
