import { mount, shallow } from 'enzyme'
import * as React from 'react'

import Header from 'components/Header'
import LayoutCore from './layout'

describe('<LayoutCore>', () => {
  const wrapper = shallow(<LayoutCore><div>Hello</div></LayoutCore>)
  it('should contain the <Header />', () => {
    expect(wrapper.contains(<Header />)).toBe(true)
  })
})
