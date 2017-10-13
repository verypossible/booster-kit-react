import { Meta } from '../../types'

function parseVariable ({
  currentPart: { defaultValue, name, type },
  parts,
  makeParams
}): Meta {
  const signature = `${name}: ${type.name}${'&#60;'}${type.typeArguments.map(a =>
    a.name)}${'&#62;'} = ${defaultValue}`
  const params = makeParams(type, parts)

  return {
    params,
    signature
  }
}

export default parseVariable
