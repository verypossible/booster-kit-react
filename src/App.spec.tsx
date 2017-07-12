import { mount } from 'enzyme'
import * as React from 'react'

import createStore from 'state/createStore'

import App from './App'
describe('(Container) Root', () => {
  const store = createStore({})
  const wrapper = mount(<App store={store} />)

  test('Should render as a <ApolloProvider />.', () => {
    const providerElement = wrapper.find('ApolloProvider')

    expect(providerElement.length).toBe(1)
    expect(providerElement.props().store).toEqual(store)
  })

  test('Should render a child <BrowserRouter />', () => {
    const browserRouter = wrapper.find('BrowserRouter')

    expect(browserRouter.length).toBe(1)
  })
})
