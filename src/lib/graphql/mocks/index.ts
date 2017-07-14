import { addMockFunctionsToSchema } from 'graphql-tools'

import mocks from './mocks'
import { schema as mockSchema } from './schema'

addMockFunctionsToSchema({
  mocks,
  preserveResolvers: false,
  schema: mockSchema
})

export { mocks }
export default mockSchema
