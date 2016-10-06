import ReactKit from './container'

// Sync route definition
export default (store) => ({
  path: 'react-web',
  component: ReactKit,
  getChildRoutes (location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./Counter').default(store),
        require('./Markdown').default(store)
      ])
    })
  }
})
