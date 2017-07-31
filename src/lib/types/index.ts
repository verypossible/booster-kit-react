import { Dispatch, Store } from 'redux'
import { ThunkAction } from 'redux-thunk'

export { Store, Dispatch, ThunkAction }
export type StoreWithState = Store<State>
