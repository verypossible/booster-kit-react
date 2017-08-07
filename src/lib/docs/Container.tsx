import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import DocsEntry from './Entry'
import { actions, KEY } from './module'

interface Props {
  loadData: Dispatch<any>,
  types: any
}

class DocsContainer extends React.Component<Props, {}> {
  public render () {
    return <DocsEntry {...this.props} />
  }
}

export default connect(
  (state) => ({ types: state[KEY].types }),
  (dispatch) => ({ loadData: (payload) => dispatch(actions.loadTypes(payload))})
)(DocsContainer)
