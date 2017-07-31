/* Actions */
declare interface LastAction {
  type: string,
  payload?: object
}

/* State */
declare interface LastActionState {
  lastAction: LastAction
}

/* Selectors */
declare interface ActionRehydrate {
  actionRehydrate: SelectState<LastAction>
}
