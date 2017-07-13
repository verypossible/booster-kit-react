/*
  State shape. Each module declares its own shape.
*/
declare interface State extends
  CounterState {
  readonly form: any,
  readonly apollo: any
}

/*
  Actions imported into /state/actions.ts. Module actions are located within the module.
*/
declare type Actions = LastAction & CounterActions

/*
  Selectors imported into /state/selectors.ts. Module selectors are located within the module.
*/
declare type Selectors = GetCount & ActionRehydrate

/*
  S = Selector
*/
declare type SelectState<S> = (state: State, props?: object, ownProps?: object) => S
