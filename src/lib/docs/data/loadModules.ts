import groupBy from 'lodash.groupby'
import S from 'string'

import { DocsModules } from '../types'

import { actions } from './state'

const getParams = path => {
  const parts = path.replace(/^\//, '').split('/')
  const [ collection, part, item, subItem, deep ] = parts
  switch (parts.length) {
    case 1:
      return { collection }
    case 2:
      return { collection, part }
    case 3:
      return { collection, part, item }
    case 4:
      return { collection, part, item, subItem }
    case 5:
      return { collection, part, item, subItem, deep }
    default:
      return null
  }
}

const cleanCollections = data => data.children
  .filter(({ originalName }) => !originalName.includes('.spec'))
  .map(r => {
    const clone = Object.assign({}, r)
    clone.originalName = S(r.originalName).between('/src/', '.').s.toLowerCase()
    clone.name = S(r.name).between('"', '"').s
    return clone
  })
  .map(c => ({ params: getParams(c.originalName), ...c }))

const groupCollections = collections => groupBy(collections, c => c.params.collection)

const groupParts = ([name, parts]) =>
  parts[0].params.part && ({
    children: groupBy(parts, p => p.params.part),
    name
  }) || ({
    children: parts,
    name
  })

const mergeChildren = ([ item, ...items ]) =>  (
  item.children && item.children.concat(...items.map(i => i.children))
  || item.children
)

const mergeItems = children => Object.entries(children).map(
  ([part, items]) => ({
    children: mergeChildren(items),
    name: part
  })
)

const cleanParts = ({ name, children }) =>
  !Array.isArray(children) && ({
    children: mergeItems(children),
    name
  }) || ({
    children,
    name
  })

async function getModules (data): Promise<DocsModules> {
  const collections = cleanCollections(data)

  const children = Object.entries(groupCollections(collections))
    .map(groupParts)
    .map(cleanParts)

  return {
    children,
    id: '#docs-/modules',
    name: 'modules',
    path: '/modules'
  }
}

/** Thunk action */
const loadModules = types =>
  dispatch => getModules(types)
    .then(modules => {
      return dispatch(actions.loadModules(modules))
    })

export default loadModules
