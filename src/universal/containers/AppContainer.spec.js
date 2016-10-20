import React from 'react'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'react-router'
import createStore from 'store/createStore'
import locationReducer from 'store/reducers'

import { mount } from 'enzyme'
const history = createMemoryHistory('/')
import AppContainer from 'containers/AppContainer'
describe('<AppContainer />', () => {
  const store = createStore({})
  const wrapper = mount(<AppContainer store={store} history={history} />)

  it('Should render as a <Provider />.', () => {
    const providerElement = wrapper.find('Provider')

    expect(providerElement.length).toBe(1)
    expect(providerElement.props().store).toEqual(store)
  })

  it('Should render a child <Router />', () => {
    const routerElement = wrapper.find('Router')

    expect(routerElement.length).toBe(1)
    expect(routerElement.props().history).toEqual(history)
  })
})
