import { Dispatch } from 'lib/types'

export function getDisplayName(WrappedComponent: any, hocName: string) {
  const name =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  return hocName ? `${hocName}(${name})` : name
}

type Props = object
type OwnProps = object
type Selector = (State, Props, OwnProps) => Selectors
type GetSelectors = (Selectors) => Selector

export function mapSelectors(selectors: Selectors, getSelectors: GetSelectors) {
  const mapStateToProps = (state: State, props: Props, ownProps: OwnProps) => {
    const requestedSelectors = getSelectors(selectors) // { counter: selectors.getCount }
    const entries = Object.entries(requestedSelectors)
    const selectorProps = {}
    entries.map(([prop, selector]: [string, Selector]) =>
      Object.assign(selectorProps, {
        [prop]: selector(state, props, ownProps)
      })
    )
    return {
      ...selectorProps
    }
  }

  return mapStateToProps
}

export const mapActions = (
  actions: object,
  getActions: any,
  { dispatch, ownProps }: { dispatch: Dispatch<State>; ownProps: object }
) => {
  const requestedActions = getActions(actions, ownProps)
  const entries = Object.entries(requestedActions)
  const dispatchProps = {}
  entries.map(([prop, action]: [string, any]) =>
    Object.assign(dispatchProps, {
      [prop]: (arg: any) => dispatch(action(arg))
    })
  )
  return {
    ...dispatchProps
  }
}
