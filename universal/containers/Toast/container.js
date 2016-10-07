import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toast } from 'modules'

import Toast from './component'

// Component
type Props = {
  toast: Object
}

class ToastContainer extends Component {
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
    toast: state[toast.KEY]
  }
}

export default connect(mapStateToProps)(ToastContainer)
