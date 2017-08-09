import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Dispatch } from 'redux'

import loadCollections from '../data/loadCollections'
import { compose } from '../helpers'
import { DocsActions, DocsState } from '../types'

import { KEY } from './index'
import docsSelectors from './selectors'

const connectDocs = <OP extends {}>(
  WrappedComponent: React.SFC<OP> | React.ComponentClass<OP>
) => {
  const makeMapStateToProps = () => {
    const mapStateToProps = (state: DocsState, props, ownProps) => docsSelectors(state, props, ownProps)
    return mapStateToProps
  }

  const mapDispatchToProps = (dispatch: Dispatch<DocsActions>) => ({
    loadData: (payload) => dispatch(loadCollections(payload))
  })

  const WithDocs = (props) => <WrappedComponent {...props} />

  return compose(
    withRouter,
    connect(makeMapStateToProps, mapDispatchToProps)
  )(WithDocs)
}

export default connectDocs
