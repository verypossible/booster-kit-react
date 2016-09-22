export default (store) => ({
  path: 'markdown',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Markdown = require('./container').default

      cb(null, Markdown)
    }, 'markdown')
  }
})
