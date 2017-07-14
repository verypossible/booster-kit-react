import {
  GetAllPagesQuery
} from '../schema'

import * as GetAllPages from './GetAllPages.gql'

export type Queries = GetAllPagesQuery  // & NewQueryA & NewQueryB

export default {
  GetAllPages
}
