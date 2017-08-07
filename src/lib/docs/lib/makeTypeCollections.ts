import groupBy from 'lodash.groupBy'
import S from 'string'

import { DocsCollections } from '../types'

import { data } from './data'

function cleanTypes () {
  const cleaned = data.children
    .filter(({ originalName }) => !originalName.includes('.spec'))
    .map((r) => Object.assign(r, { originalName: S(r.originalName).between('src/', '.').s }))
    .filter(({ originalName }) => originalName.includes('/'))
  return cleaned
}

const findModuleParts = (module, types) => types.filter(({ originalName }) => originalName.includes(module))

function getCollections (): Promise<DocsCollections> {
  return new Promise((resolve) => {
    const types = cleanTypes()

    const typeCollections = types.map((r) => S(r.originalName).splitLeft('/'))
    const buildCollections = (groups) =>
      Object.entries(groupBy(groups, (r) => r.shift()))
        .map(([collection, children]) => {
          const isModule = children.filter((r) => r.length !== 0)

          if (isModule.length === 0) {
            return
          }

          const typeChildren = groupBy(children, (r) => r.shift())
          const modules = Object.keys(typeChildren).map((name) => {
            const parts = findModuleParts(`${collection}/${name}`, types)
            return {
              name,
              parts
            }
          })
          return { collection, modules }
        })

    resolve(buildCollections(typeCollections))
  })
}

export default getCollections
