import { graphql } from 'graphql'

import schema from '../graphql/mocks'
import logger from '../logger'

function mockGraphql (query) {
  return graphql(schema, query.loc.source.body)
      .then((data) => data)
      .catch((err) => logger.log.error('mock server error', err))
  })
}

export default mockGraphql
