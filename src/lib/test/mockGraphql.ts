import { mockServer } from 'graphql-tools'

import schema, { mocks } from '../graphql/mocks'
import logger from '../logger'

const mockGraphql = (query) => {
  return mockServer(schema, mocks).query(query.loc.source.body)
    .then((data) => data)
    .catch((err) => logger.log.error('mock server error', err))
}

export default mockGraphql
