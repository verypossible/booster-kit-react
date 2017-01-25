import React from 'react'
import { Provider } from 'react-redux'
import createStore from 'store/createStore'

import { mount } from 'enzyme'
import AppContainer from './Root'
describe('<AppContainer />', () => {
  const store = createStore({})
  const wrapper = mount(<Root store={store} />)

  it('Should render as a <Provider />.', () => {
    const providerElement = wrapper.find('Provider')

    expect(providerElement.length).toBe(1)
    expect(providerElement.props().store).toEqual(store)
  })

  it('Should render a child <Router />', () => {
    const routerElement = wrapper.find('Router')

    expect(routerElement.length).toBe(1)
    expect(routerElement.props().store).toEqual(store)
  })
})
