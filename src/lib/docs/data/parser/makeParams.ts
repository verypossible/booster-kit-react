import uniqBy from 'lodash.uniqby'

import { Param } from '../../types'

import { formatSource } from './index'

function format (param: any, parent?: any): Param {
  const base = {
    inherited: param.inheritedFrom && param.inheritedFrom.name,
    name: param.name,
    parent,
    sources: param.sources && param.sources.map(formatSource),
    ...param.flags
  }

  const merge = val => Object.assign(base, { type: val })

  switch (param.type.type) {
    case 'union':
      return merge(param.type.types
        .map(t => t.name || (t.value && `"${t.value}"`))
        .join(' | ')
      )

    default:
      return merge(param.type.name)
  }
}

const PARAMETERS = 'params'
const TYPE_ARGUMENTS_ARRAY = 'typeArgumentArray'
const TYPE_ARGUMENT = 'typeArgument'
const TYPE_OBJECT = 'typeObject'

const getType = type =>  (
  (type.parameters && PARAMETERS) ||
  (type.typeArguments && type.typeArguments.find(arg => arg.types) && TYPE_ARGUMENTS_ARRAY) ||
  (type.typeArguments && type.typeArguments && TYPE_ARGUMENT) ||
  (type.type && TYPE_OBJECT)
)

function makeParams (type, parts) {
  const matches = paramId => parts.find(part => part.id === paramId)

  const uniqArgs = typeArguments => uniqBy(typeArguments, 'id')
    .map(params => params.children.map(param => format(param, params.name)))

  const matchTypePart = args => args
    .map(param => matches(param.id))
    .filter(param => param)

  switch (getType(type)) {
    case PARAMETERS:
      return type.parameters.map(params => {
        if (!params.type.declaration) {
          return format(params)
        }

        return params.type.declaration.children
          .map(param => format(param, params.name))
      })

    case TYPE_ARGUMENTS_ARRAY:
      // const arrayParams = type.typeArguments
      //   .map((arg) => arg.types && uniqBy(matchTypePart(arg.types)) || arg)
      return false

    case TYPE_ARGUMENT:
      return uniqArgs(matchTypePart(type.typeArguments))

    case TYPE_OBJECT:
      return format(type)

    default:
      return undefined

  }
}

export default makeParams
