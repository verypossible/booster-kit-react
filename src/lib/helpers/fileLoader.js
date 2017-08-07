/* istanbul ignore next */
import S from 'string'
const context = require.context('../docs', true, /\.json$/)
const modules = {}
const subscriptions = []

if (module.hot) {
  module.hot.accept((context.id), () => {
    const reloadedContext = require.context('../docs', true, /\.json$/)
    const changedModules = reloadedContext.keys()
      .map(key => [key, reloadedContext(key)])
      .filter(reloadedModule => modules[reloadedModule[0]] !== reloadedModule[1])
    changedModules.forEach((module) => {
      modules[module[0]] = module[1]
      subscriptions.forEach(f => f(module[0], module[1], true))
    })
  })
}

export const subscribe = (f) => {
  context.keys().forEach((key) => {
    const module = context(key)
    modules[key] = module
    f(key, module, false)
  })
  subscriptions.push(f)
}
