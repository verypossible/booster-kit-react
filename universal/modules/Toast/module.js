/* @flow */
const KEY = 'toast'

// Actions
const SHOW_TOAST = `${KEY}/SHOW_TOAST`

type showProps = {
  type: any,
  message: string,
}

function show ({type, message}: showProps) {
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

const reducer = (state: any = preloadedState, action: any) => {
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

const toastModule = {
  KEY,
  actions,
  reducer
}

export default toastModule
