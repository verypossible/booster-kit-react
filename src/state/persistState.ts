import localForage from 'localforage'
import { persistStore } from 'redux-persist'
import MemoryStorage from 'redux-persist-memory-storage'

import { StoreWithState } from 'lib/types'

const memoryStorage = new MemoryStorage()
const reducersToPersist = []

interface PersistState {
  store: StoreWithState,
  callback?: () => any,
  purge?: boolean
}

export default function ({ store, callback, purge }: PersistState) {
  let enableLocalForage = true
  try {
    window.localStorage.setItem('__u', 'u')
  } catch (e) {
    enableLocalForage = false
  }

  const persist = persistStore(store, {
    storage: enableLocalForage ? localForage : memoryStorage,
    whitelist: reducersToPersist
  }, () => {
    if (callback) {
      callback()
    }
  })

  return purge ? persist.purge() : persist
}
