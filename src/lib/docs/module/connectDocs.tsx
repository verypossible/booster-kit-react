import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Dispatch } from 'redux'

import { compose } from '../helpers'
import { ConnectProps, DocsActions, DocsHistory, DocsMatch, DocsState, Selectors } from '../types'

import loadCollections from './loadCollections'
import loadMarkdown from './loadMarkdown'
import selectors from './selectors'

const connectDocs = ({ selector }) => <OP extends {}>(
  WrappedComponent: React.SFC<OP & ConnectProps> | React.ComponentClass<OP & ConnectProps>
) => {
  const WithDocs = (props) => <WrappedComponent {...props} />

  const makeMapStateToProps = () => {
    const mapStateToProps = (
      state: DocsState, props: DocsHistory & DocsMatch, ownProps: Selectors
    ) => selectors[selector](state, props, ownProps)
    return mapStateToProps
  }

  return compose(
    withRouter,
    connect(
      makeMapStateToProps,
      (dispatch: Dispatch<DocsActions>) => ({
        loadData: (payload) => dispatch(loadCollections(payload)),
        loadMarkdown: () => dispatch(loadMarkdown())
      })
    )
  )(WithDocs)
}

export default connectDocs
