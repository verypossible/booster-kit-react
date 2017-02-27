import { logger } from 'lib'

const appName = __APP_NAME__

/* Define keys you want persisted in Local Storage. By default, all are stored.
   If you define keys, use this function in store.subscribe() method in createStore like so:
   ... saveState(persistState(state))
export const persistState = (state) => {
  return {
      ....
    }
  }
}
*/

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(appName)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(appName, serializedState)
  } catch (err) {
    logger.log('error', 'Error saving state to local store', err)
  }
}
