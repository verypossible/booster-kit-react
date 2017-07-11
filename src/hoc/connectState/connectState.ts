import { connect } from 'react-redux'

import { compose } from 'lib/helpers'
import { D } from 'lib/types'
import actions from 'state/actions'
import selectors from 'state/selectors'

import { mapActions, mapSelectors } from '../helpers'

import withStateHOC from './stateHOC'

export const wrapConnectState = ({
  stateHOC = withStateHOC
}: any = {}) => (
    mapCounterToProps: any,
    mapActionsToProps: any
  ) => {
  const mapDispatchToProps = (dispatch: D<S>, ownProps: object) => (
    mapActions(actions, mapActionsToProps, { dispatch, ownProps })
  )

  const makeMapStateToProps = () => mapSelectors(selectors, mapCounterToProps)

  return compose(
    connect(
     makeMapStateToProps,
     mapDispatchToProps
   ),
   stateHOC
  )
}

export default wrapConnectState()
