import { shallow } from 'enzyme'
import * as React from 'react'

import LayoutCore from './layout'

describe('<LayoutCore>', () => {
  const wrapper = shallow(<LayoutCore children={'hi'}/>)
  it('should contain the <Header />', () => {
    expect(wrapper.find('ThemeProvider').length).toEqual(1)
  })
})
