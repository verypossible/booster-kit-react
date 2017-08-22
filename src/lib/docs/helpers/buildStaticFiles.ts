export function buildDirectories (parsedFiles) {
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

export default buildDirectories
