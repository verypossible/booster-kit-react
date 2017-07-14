import { mount } from 'enzyme'
import * as React from 'react'

import { mocks } from 'lib/graphql/mocks'
import { mockProvider } from 'lib/test/mockApollo'

import GraphqlHome from './root'

describe('(Graphql) A mock query', () => {
  const Provider = mockProvider({
    mocks
  })

  const wrapper = mount(
    <Provider>
      <GraphqlHome />
    </Provider>
  )
  test('It returns data', () => {
    expect(wrapper.find('GraphqlHome').props().pages.length).toBeLessThanOrEqual(12)
  })
})
