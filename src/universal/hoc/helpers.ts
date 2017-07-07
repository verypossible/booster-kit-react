import { D } from 'lib/types'

export function getDisplayName (WrappedComponent: any, hocName: string) {
  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component'
  return hocName ? `${hocName}(${name})` : name
}

const getEntries = (request: object) => Object.entries(request)

export function mapSelectors (
  selectors: object,
  getSelectors: any
) {
  const mapStateToProps = (state: S, props: object, ownProps: object) => {
    const requestedSelectors = getSelectors(selectors)
    const entries = getEntries(requestedSelectors)
    const selectorProps = {}
    entries.map(([prop, selector]: [string, any]) => Object.assign(selectorProps, {
      [prop]: selector(state, props, ownProps)
    }))
    return {
      ...selectorProps
    }
  }

  return mapStateToProps
}

export const mapActions = (
  actions: object,
  getActions: any,
  { dispatch, ownProps }: { dispatch: D<S>, ownProps: object }
) => {
  const requestedActions = getActions(actions, ownProps)
  const entries = getEntries(requestedActions)
  const dispatchProps = {}
  entries.map(([prop, action]: [string, any]) => Object.assign(dispatchProps, {
    [prop]: (arg: any) => dispatch(action(arg))
  }))
  return {
    ...dispatchProps
  }
}
