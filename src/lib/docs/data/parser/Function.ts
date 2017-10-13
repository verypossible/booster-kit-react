function parseFunction ({
  currentPart: { name, signatures },
  makeParams
}) {
  const [ signature ] = signatures
  const type = signature.type
  const parseParams = signature.parameters
  if (!parseParams) {
    return
  }

  const returnTypes = type && type.typeArguments
  const returns = {
    name: signature.type.name,
    types: returnTypes && returnTypes.map(t => (
      ((t.declaration && t.declaration.kindString === 'Type literal') && 'object') ||
      t.name
    )).join(', ')
  }

  const [ params ] = makeParams(signature)

  function argType (param) {
    switch (param.name) {
      case '__namedParameters':
        return 'object'

      default:
        return param.type.type
    }
  }

  const functionArguments = signature.parameters.map(param => `${param.name}: ${argType(param)}`).join(', ')

  const method = `${name} (${functionArguments}): ${returns.name}`
  const makeSignature = !returns.types ? method
    : `${method}<${returns.types}>`

  return {
    params,
    signature: makeSignature
  }
}

export default parseFunction
