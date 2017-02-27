import React from 'react'
import { mount } from 'enzyme'

import { test } from 'lib'

import Signup from './container'

const { MockBrowser } = test

describe('(Container) Login:', () => {
  const wrapper = mount(
    <MockBrowser>
       <Signup />
    </MockBrowser>
  )

  it('Should render a form.', () => {
    const formElement = wrapper.find('form')

    expect(formElement.length).toBe(1)
  })

  it('Should render three inputs.', () => {
    const inputElement = wrapper.find('Field')

    expect(inputElement.length).toBe(3)
  })

  it('Should render a submit button', () => {
    const buttonElement = wrapper.find('button')

    expect(buttonElement.length).toBe(1)
  })
})
