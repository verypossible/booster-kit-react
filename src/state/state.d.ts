declare type CounterState = number

declare interface Counter {
  counter: CounterState,
}

declare interface S {
  readonly counter: CounterState,
  readonly form: any,
  readonly apollo: any
}
