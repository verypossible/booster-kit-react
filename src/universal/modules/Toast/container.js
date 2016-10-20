import React, { Component } from 'react'
import { connect } from 'react-redux'

import toastModule from './module'
import Toast from 'components/Toast'

const { KEY } = toastModule

// Container
type Props = {
  toast: Object
}

class ConnectedToast extends Component {
  props: Props;

  render () {
    const { render, type, message } = this.props.toast
    if (!render) {
      return null
    }

    return (
      <Toast type={type} message={message} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    toast: state[KEY]
  }
}

const ToastContainer = connect(mapStateToProps)(ConnectedToast)

export default ToastContainer
