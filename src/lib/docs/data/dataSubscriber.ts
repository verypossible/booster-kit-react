/* istanbul ignore next */
import { Data } from '../types'

const context = require.context('../../docs', true, /\.json$/)
const modules = {}
const subscriptions = []

if (module.hot) {
  module.hot.accept((context.id), () => {
    const reloadedContext = require.context('../../docs', true, /\.json$/)
    const changedModules = reloadedContext.keys()
      .map((key) => [key, reloadedContext(key)])
      .filter((reloadedModule) => modules[reloadedModule[0]] !== reloadedModule[1])
    changedModules.map((module) => {
      modules[module[0]] = module[1]
      subscriptions.map((f) => f(module[0], module[1], true))
    })
  })
}

const subscribe = (f) => {
  context.keys().map((key) => {
    const module = context(key)
    modules[key] = module
    f(key, module, false)
  })
  subscriptions.push(f)
}

const getData: Data = () => {
  let data = {}
  const handler = (name, module, changed) => {
    data = Object.assign(data, { name, module, changed })
  }

  subscribe(handler)
  return data
}

export default getData
