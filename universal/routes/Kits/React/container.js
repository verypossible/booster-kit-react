import React, { Component } from 'react'
import ReactKit from './component'
import { connect } from 'react-redux'
import { toast } from 'modules'

type Props = {
  dispatch: Function
}

class ReactKitContainer extends Component {
  props: Props;

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { dispatch } = this.props
    const message = 'Dispatched from React Container'
    const type = 'notice'
    dispatch(toast.actions.show(type, message))
  }

  render () {
    return (
      <ReactKit {...this.props} handleClick={this.handleClick} />
    )
  }
}

export default connect(() => undefined)(ReactKitContainer)
