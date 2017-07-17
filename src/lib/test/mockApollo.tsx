import {
  addMockFunctionsToSchema,
  MockList
} from 'graphql-tools'
import * as React from 'react'

export { MockList }

import { ApolloClient, ApolloProvider } from 'react-apollo'

import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils'
import { buildClientSchema } from 'graphql'
import { MemoryRouter } from 'react-router'
import { Reducer } from 'redux'
import { createStore } from 'redux'
// import { RenderFunction } from '@storybook/react'

import { Graphql } from 'lib/graphql'
import * as introspectionResult from 'lib/graphql/schema.json'
import rootReducer from 'state/reducers'

type MocksTypes = Graphql | object

export function mockClient (mocks: MocksTypes): ApolloClient {
  const exSchema = buildClientSchema(introspectionResult.data)
  addMockFunctionsToSchema({
    mocks: mocks as any,
    schema: exSchema
  })

  const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema: exSchema })
  const client = new ApolloClient({
    networkInterface: mockNetworkInterface
  })
  return client
}

export interface MockProviderOpts {
  /** Definition of graphql mocks for mock client */
  mocks?: MocksTypes
  /** Reducer function */
  reducer?: Reducer<State>

  /** Value to use as state. Alternatively use initState */
  state?: State
  /** A function to initialize the state. Passed the default state returned by the reducer. */
  initState?: (state: State) => State
}

/** Create a fully initialized ApolloProvider with a mocked out graphql connection and arbitrary initial state. */
export function mockProvider (opts?: MockProviderOpts) {
  if (!opts) { opts = {} }

  const apollo = mockClient(opts.mocks || {})

  const reducer = opts.reducer || rootReducer

  let state = opts.state || reducer(undefined as any, { type: '@@INIT' })
  if (opts.initState) { state = opts.initState(state) }

  const store = createStore<State>(reducer, state)

  return class extends React.Component<{}, {}> {
    public static displayName = 'MockProvider'
    public render () {
      return (
        <MemoryRouter>
          <ApolloProvider client={apollo} store={store}>
            {this.props.children}
          </ApolloProvider>
        </MemoryRouter>
      )
    }
  }
}

// ...If we end up using Storybooks
//
// export function mockProviderDecorator (opts?: MockProviderOpts) {
//   const Provider = mockProvider(opts)
//   return (story: RenderFunction) => <Provider>{story()}</Provider>
// }
