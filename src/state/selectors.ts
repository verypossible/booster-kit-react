import { selectors as counterSelectors } from './counter'
import { selectors as lastActionSelectors } from './lastAction'
import { selectors as sessionSelectors } from './session'

const selectors = {
  ...counterSelectors,
  ...lastActionSelectors,
  ...sessionSelectors
}

export default selectors
