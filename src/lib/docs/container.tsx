import { connect } from 'react-redux'

import { KEY, loadTypes } from './index'

import DocsController from './Controller'

export default connect(
  (state) => ({
    collections: state[KEY]
  }),
  (dispatch) => ({
    loadTypes: (payload) => dispatch(loadTypes(payload))
  })
)(DocsController)
