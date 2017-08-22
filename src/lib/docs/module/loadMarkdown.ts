import groupBy from 'lodash.groupby'
import S from 'string'

import { markdownLoader } from '../helpers'

import { actions } from './module'

function buildDirectories (parsedFiles) {
  const directories = parsedFiles.map((f) => f.path.replace(/^\//, '').split('/'))
  const buildTree = (children, oldPath) => (
    Object.entries(groupBy(children, (f) => f.shift()))
      .map(([path, files]) => {
        const validFiles = files.filter((f) => f.length !== 0)
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
            files: subDirectories,
            ...file
          })
        )
      })
  )
  return buildTree(directories, '')
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

  const pathSlugs = sanitizedPath.map((part) => S(part).dasherize().chompLeft('-').s)
  const path = pathSlugs.join('/')
  return {
    content: `<markdown>${content}</markdown>`,
    id: `#docs-${path}`,
    param: S(pathSlugs.slice(-1)[0]).s,
    path,
    title: S(sanitizedPath.slice(-1)[0]).titleCase().collapseWhitespace().s
  }
}

const getStaticDocs = () => {
  return (dispatch) => {
    const payload = []
    function subscribeToFile (name, content, isReload) {
      const getData = parseMarkdown(name, content)

      if (isReload) {
        return dispatch(actions.updateMarkdown(getData))
      }

      return payload.push(getData)
    }

    markdownLoader(subscribeToFile)
    const formattedFiles = buildDirectories(payload)
    return dispatch(actions.loadMarkdown(formattedFiles))
  }
}

export default getStaticDocs
