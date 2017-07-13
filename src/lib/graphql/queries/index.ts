import {
  GetAllPagesQuery
} from '../schema'

import * as getAllPages from './getAllPages.gql'

export type QueryTypes = GetAllPagesQuery

export interface Queries {
  getAllPages: GetAllPagesQuery
}

export default {
  getAllPages
}
