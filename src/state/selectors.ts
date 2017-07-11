import { selectors as counterSelectors } from './counter'
import { selectors as lastActionSelectors } from './lastAction'

const selectors = {
  ...counterSelectors,
  ...lastActionSelectors
}

export default selectors
