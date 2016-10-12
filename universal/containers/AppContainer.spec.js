import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import createStore from 'store/createStore'

import { mount } from 'enzyme'
import { expect } from 'chai'

import AppContainer from 'containers/AppContainer'

describe.only('<AppContainer />', () => {
  const store = createStore({})
  const wrapper = mount(<AppContainer store={store} history={browserHistory} />)

  it('Should render as a <Provider />.', () => {
    const providerElement = wrapper.find('Provider')

    expect(providerElement).to.have.length(1)
    expect(providerElement.props().store).to.equal(store)
  })

  it('Should render a child <Router />', () => {
    const routerElement = wrapper.find('Router')

    expect(routerElement).to.have.length(1)
    expect(routerElement.props().history).to.equal(browserHistory)
  })
})
