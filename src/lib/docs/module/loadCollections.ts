import groupBy from 'lodash.groupby'
import S from 'string'

import { actions } from '../module'
import { DocsCollections } from '../types'

async function cleanTypes (data) {
  return data.children
    .filter(({ originalName }) => !originalName.includes('.spec'))
    .map((r) => {
      const clone = Object.assign({}, r)
      clone.originalName = S(r.originalName).between('/src/', '.').s
      return clone
    })
    .filter(({ originalName }) => originalName.includes('/'))
}

const findModuleParts = (module, types) => types.filter(({ originalName }) => originalName.includes(module))

function combineParts (parts) {
  const combined = []
  parts
    .filter((p) => p.children)
    .map(({ children }) => children.map((c) => combined.push(c)))

  return combined
}

async function getCollections (data): Promise<DocsCollections> {
  const types = await cleanTypes(data)

  const typeCollections = types.map((r) => {
    const hasPath = r.originalName.includes('/')

    return hasPath ? S(r.originalName).splitLeft('/') : r
  })

  const buildCollections = (groups) =>
    Object.entries(groupBy(groups, (r) => r.shift()))
      .map(([collection, children]) => {
        const isModule = children.filter((r) => r.length !== 0)

        if (isModule.length === 0) {
          return
        }

        const typeChildren = groupBy(children, (r) => r.shift())
        const modules = Object.keys(typeChildren).map((name) => {
          const getParts = findModuleParts(`${collection}/${name}`, types)
          const parts = combineParts(getParts)
          return {
            name,
            parts
          }
        })

        return { collection, modules }
      })

  return buildCollections(typeCollections)
}

/** Thunk action */
const loadCollections = (types) =>
  (dispatch) => getCollections(types)
    .then((collections) => {
      return dispatch(actions.loadCollections(collections))
    })

export default loadCollections
