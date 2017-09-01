type Context = any

const context: Context = require.context('../../../../docs', true, /\.md$/)
const modules = {}
const subscriptions = []

const updatedModules = (obj, prev, curr) => obj[prev] !== curr
const mergeUpdatedModule = (prev, curr) => modules[prev] = curr

if (module.hot) {
  module.hot.accept(context.id, () => {
    const reloadedContext = require.context('../../../../docs', true, /\.md$/)
    const newKeys = reloadedContext && reloadedContext.keys()
    const changedModules = newKeys && newKeys
      .map(key => [key, reloadedContext(key)])
      .filter(([prev, curr]) => updatedModules(modules, prev, curr))

    return changedModules && changedModules.map(([prev, curr]) => {
      mergeUpdatedModule(prev, curr)
      subscriptions.forEach(f => f(prev, curr, true))
    })
  })
}

const subscribe = f => {
  context.keys().map(key => {
    const module = context(key)
    modules[key] = module
    f(key, module, false)
  })
  subscriptions.push(f)
}

export default subscribe
