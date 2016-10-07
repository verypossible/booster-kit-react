import { injectReducer } from 'store/reducers'

export default (store) => {
  console.log('HERE')
  return {
    path: 'counter',

    getComponent (nextState, cb) {
      console.log('getComponent Method')
      require.ensure([], (require) => {
        const Counter = require('./container').default
        const module = require('../../modules/counter').default

        console.log(module.KEY, module.reducer)

        injectReducer(store, { key: module.KEY, reducer: module.reducer })

        /*  Return getComponent   */
        cb(null, Counter)

      /* Webpack named bundle   */
      }, 'counter')
    }
  }
}
