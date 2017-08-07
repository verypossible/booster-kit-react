import getCollections from './lib/makeTypeCollections'

import { actions } from './module'

const loadTypes = () => (dispatch) => getCollections()
  .then((collections) => dispatch(actions.loadTypes(collections)))

export default loadTypes
