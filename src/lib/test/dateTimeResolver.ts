import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

/**
 *  DateTime types are not currently included in the graphql spec.
 *  So, we need to write a customer scalar so our mocks will resolve the DateTime.
 */
export default {
  DateTime: () => new GraphQLScalarType({
    description: 'DateTime custom scalar type',
    name: 'DateTime',
    parseLiteral (ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10) // ast value is always in string format
      }
      return null
    },
    parseValue (value) {
      return new Date(value) // value from the client
    },
    serialize (value) {
      return value.getTime() // value sent to the client
    }
  })
}
