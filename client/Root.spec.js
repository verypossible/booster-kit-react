import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../universal/store/createStore'

import { mount } from 'enzyme'
import Root from './Root'
describe('(Container) Root', () => {
  const store = createStore({})
  const wrapper = mount(<Root store={store} />)

  it('Should render as a <Provider />.', () => {
    const providerElement = wrapper.find('Provider')

    expect(providerElement.length).toBe(1)
    expect(providerElement.props().store).toEqual(store)
  })

  it('Should render a child <BrowserRouter />', () => {
    const browserRouter = wrapper.find('BrowserRouter')

    expect(browserRouter.length).toBe(1)
  })
})
