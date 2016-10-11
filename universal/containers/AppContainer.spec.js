import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import createStore from 'store/createStore'

import { mount } from 'enzyme'
import { expect } from 'chai'

import AppContainer from 'containers/AppContainer'

describe('<AppContainer />', () => {
  it('Should render as a <Provider>.', () => {
    const store = createStore({})

    const wrapper = mount(<AppContainer store={store} history={browserHistory} />)

    expect(wrapper.props().store).to.equal(store);
  })
})
