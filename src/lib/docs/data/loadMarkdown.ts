import * as groupBy from 'lodash.groupby'
import * as S from 'string'

import { markdownLoader } from '../helpers'

import { actions } from './state'

const directories = files => files.map(f => f.path.replace(/^\//, '').split('/'))

function buildDirectories (parsedFiles) {
  const buildTree = (children, oldPath) => (
    Object.entries(groupBy(children, f => f.shift()))
      .map(([path, files]) => {
        const validFiles = files.filter(f => f.length !== 0)
        const currentFile = `${oldPath}/${path}`
        const baseObj = { path: currentFile }

        function matchData (obj) {
          return obj.id === `#docs-${currentFile}`
        }

        const file = parsedFiles.find(matchData)
        const addToParent = (
          Object.assign({}, baseObj, { ...file })
        )

        if (validFiles.length === 0) {
          return addToParent
        }

        const subDirectories = buildTree(validFiles, currentFile)

        return (
          Object.assign({}, baseObj, {
            children: subDirectories,
            ...file
          })
        )
      })
  )
  return buildTree(directories(parsedFiles), '')
}

const slugFromKey = (key: string): string => key
  .replace(/^\.|(?:\/pages)|(?:\/index)?\.md$/g, '')
  .replace(/^$/, '/')

export function parseMarkdown (name: string, content: string) {
  const slug = slugFromKey(name)
  const sanitizedPath = S(slug)
                .humanize()
                .strip('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-')
                .splitRight('/')

  const pathSlugs = sanitizedPath.map(part => S(part).dasherize().chompLeft('-').s)
  const path = pathSlugs.join('/')
  return {
    content,
    id: `#docs-${path}`,
    name: S(pathSlugs.slice(-1)[0]).s,
    path,
    title: S(sanitizedPath.slice(-1)[0]).titleCase().collapseWhitespace().s
  }
}

export const getStaticDocs = contextLoader => {
  return dispatch => {
    const payload = []
    function subscribeToFile (name, content, isReload) {
      console.log(content, 'CONTENT')
      const parsedData = parseMarkdown(name, content)

      if (isReload) {
        const updatedPayload = payload.reduce((acc, curr) => (
          curr.path === parsedData.path && acc.concat([parsedData]) || acc.concat([curr])
        ), [])

        const updatedDirectories = buildDirectories(updatedPayload)
        return dispatch(actions.updateMarkdown(updatedDirectories))
      }

      return payload.push(parsedData)
    }

    contextLoader(subscribeToFile)
    const formattedFiles = buildDirectories(payload)
    return dispatch(actions.loadMarkdown(formattedFiles))
  }
}

export default () => getStaticDocs(markdownLoader)
