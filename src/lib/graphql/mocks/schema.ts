import { buildClientSchema } from 'graphql'
import * as introspectionResult from '../scaphold.schema.json'

export const schema = buildClientSchema(introspectionResult.data)
