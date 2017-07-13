import connectState from 'hoc/connectState'

import Counter from './component'

export default connectState(
  (selectors: Selectors) => ({
    counter: selectors.getCount
  }),
  (actions: any) => ({
    double: actions.doubleAsync,
    single: () => actions.increment(1)
  })
)(Counter)
