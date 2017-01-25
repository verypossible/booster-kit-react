import React from 'react'
import { injectReducer } from 'store/reducers'
import module from './module'
import container from './container'

const { KEY, actions, reducer } = module

export const counter = {
  actions,
  container,
  KEY,
  reducer
}

const Counter = container

export default ({ store }: Object) => {
  console.log(store)
  injectReducer(store, { key: KEY, reducer: reducer })
  return (
    <Counter />
  )
}
