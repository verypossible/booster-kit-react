/* @flow */
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Module
const KEY = 'toast'

// Actions
const SHOW_TOAST = `${KEY}/SHOW_TOAST`

function show (type, message) {
  return {
    type: SHOW_TOAST,
    toast: {
      render: true,
      type: type,
      message: message
    }
  }
}

const actions = {
  show
}

// Reducer
const preloadedState = {
  render: false,
  type: null,
  message: null
}

const reducer = (state = preloadedState, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        render: true,
        type: action.toast.type,
        message: action.toast.message
      }
    default:
      return state
  }
}

export const toast = {
  KEY,
  actions,
  reducer
}
