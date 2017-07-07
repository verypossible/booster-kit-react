import { connect } from 'react-redux'

import { compose } from 'lib/helpers'
import { D } from 'lib/types'
import { actions, selectors } from 'state/counter'

import { mapActions, mapSelectors } from '../helpers'

import withCounterHOC from './counterHOC'

export const wrapConnectCounter = ({
  counterHOC = withCounterHOC
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
   counterHOC
  )
}

export default wrapConnectCounter()
