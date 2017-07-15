import { connect } from 'react-redux'

import { compose } from 'lib/helpers'
import { Dispatch } from 'lib/types'
import actions from 'state/actions'
import selectors from 'state/selectors'

import { mapActions, mapSelectors } from '../helpers'

import withStateHOC from './stateHOC'

interface Config {
  stateHOC?: React.SFC<any>
}

export const wrapConnectState = ({
  stateHOC = withStateHOC
}: Config = {}) => (
    mapStateToProps,
    mapActionsToProps?: any
  ) => {
  const makeMapStateToProps = () => mapSelectors(selectors, mapStateToProps)

  let connectState = connect(makeMapStateToProps)

  if (mapActionsToProps) {
    const mapDispatchToProps = (dispatch: Dispatch<State>, ownProps: object) => (
      mapActions(actions, mapActionsToProps, { dispatch, ownProps })
    )

    connectState = connect(makeMapStateToProps, mapDispatchToProps)
  }

  return compose(
   connectState,
   stateHOC
  )
}

export default wrapConnectState()
