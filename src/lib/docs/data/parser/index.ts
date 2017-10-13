import { BaseType, Meta, ParsedType } from '../../types'

import func from './Function'
import makeParams from './makeParams'
import variable from './Variable'

export const formatSource = s => `${s.fileName}:${s.line}`

function metaData (args): Meta {
  switch (args.currentPart.kindString) {
    case 'Function':
      return func(args)

    case 'Variable':
      return variable(args)

    default:
      return {}
  }
}

function parse (currentPart: BaseType, parts: BaseType[]): ParsedType {
  return {
    meta: {
      sources: currentPart.sources.map(formatSource),
      ...metaData({ currentPart, parts, makeParams })
    },
    ...currentPart
  }
}

export default parse
