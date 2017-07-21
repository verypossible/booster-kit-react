import purgeStorage from 'state/persistState'

import createStore from 'state/createStore'

export default function purgeState ({ action }) {
  const store = createStore()
  return (dispatch) => {
    function callback () {
      dispatch(action)
      return location.reload()
    }

    return purgeStorage({ callback, purge: true, store })
  }
}
