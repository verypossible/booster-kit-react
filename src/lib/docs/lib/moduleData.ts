import groupBy from 'lodash.groupBy'

export async function groupModuleTypes (module) {
  const combinedChildren = module.parts.map(({ children }) => {
    children.map((child) => child)
  })
  const groupedTypes = groupBy(combinedChildren, (c) => c.kindString)
  return groupedTypes
}

export async function parseFunctionType (funcs) {
  const buildFuncSignatures = funcs.map((f) => {
    const callSig = f.signatures.find((s) => s.kindString === 'Call signature')

    const returnTypes = callSig.type.typeArguments

    const returns = {
      name: callSig.type.name,
      types: returnTypes && returnTypes.map((t) => t.name)
    }

    const funcName = callSig.name

    const params = callSig.parameters.map((p) => {
      const declaration = p.type.declaration
      const args = p.name

      const sources = declaration.sources.map((s) => `${s.fileName}:${s.line}`)

      const paramTypes = declaration.children.map(({ name, type }) => {
        if (!type.name) {
          return { name, type: type.type, types: type.types.map((t) => t.name)}
        }
        return ({ name, type: type.name })
      })

      return {
        args,
        params: paramTypes,
        sources
      }
    })

    return { name: funcName, returns, ...params }
  })

  return buildFuncSignatures
}
