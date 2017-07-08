import connectCounter from 'hoc/connectCounter'

import Counter from './component'

export default connectCounter(
  (selectors: any) => ({
    counter: selectors.getCount
  }),
  (actions: any) => ({
    double: actions.doubleAsync,
    single: () => actions.increment(1)
  })
)(Counter)
