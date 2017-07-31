import { actions as counterActions } from './counter'
import { actions as sessionActions } from './session'

const actions = {
  ...counterActions,
  ...sessionActions
}

export default actions
