import React from 'react'
import { mount, shallow } from 'enzyme'
import LayoutCore from 'layouts/LayoutCore'
import Header from 'components/Header'
import { toast } from 'modules/Toast'

const ToastContainer = toast.container

describe('<LayoutCore>', () => {
  const wrapper = shallow(<LayoutCore><div>Hello</div></LayoutCore>)
  it('should contain the <Header />', () => {
    expect(wrapper.contains(<Header />)).toBe(true)
  })
  it('should contain the <ToastContainer />', () => {
    expect(wrapper.contains(<ToastContainer />)).toBe(true)
  })
})
