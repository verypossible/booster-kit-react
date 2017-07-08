/* istanbul ignore next */
import S from 'string'

const context = require.context('../../../docs', true, /\.md$/)
const modules = {}
const subscriptions = []

if (module.hot) {
  module.hot.accept((context.id), () => {
    const reloadedContext = require.context('../../../docs', true, /\.md$/)
    const changedModules = reloadedContext.keys()
      .map(key => [key, reloadedContext(key)])
      .filter(reloadedModule => modules[reloadedModule[0]] !== reloadedModule[1])
    changedModules.forEach((module) => {
      modules[module[0]] = module[1]
      subscriptions.forEach(f => f(module[0], module[1], true))
    })
  })
}

const subscribe = (f) => {
  context.keys().forEach((key) => {
    const module = context(key)
    modules[key] = module
    f(key, module, false)
  })
  subscriptions.push(f)
}

const getMarkdown = () => {
  const documents = []
  function parseMarkdown(name, content, changed) {
    const sanitizedPath = S(name)
                  .between('./', '/README.md')
                  .humanize()
                  .strip('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-')
                  .splitRight('/')

    const pathSlugs = sanitizedPath.map(part => {
      const slugPart = S(part).dasherize().chompLeft('-').s
      return slugPart
    })

    const path = pathSlugs.join('/')
    const title = S(sanitizedPath.slice(-1)[0]).titleCase().collapseWhitespace().s

    return documents.push({
      title,
      path,
      content: `<markdown>${content}</markdown>`
    })
  }

  subscribe(parseMarkdown)
  return documents
}

export default getMarkdown
