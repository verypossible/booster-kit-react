import { buildClientSchema } from 'graphql'
import * as introspectionResult from '../schema.json'

export const schema = buildClientSchema(introspectionResult.data)
