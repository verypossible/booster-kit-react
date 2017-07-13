/* Actions */
declare type CounterActions = {
  payload?: Counter,
  type: 'counter/COUNTER_INCREMENT'
}

/* State */
declare type Counter = number

declare interface CounterState {
  readonly counter: Counter,
}

/* Selectors */
declare interface GetCount {
  getCount: SelectState<Counter>
}
