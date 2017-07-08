declare type CounterState = number

declare interface Counter {
  counter: CounterState
}

declare interface S {
  readonly [counter: string]: CounterState
}
