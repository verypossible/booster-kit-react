import React from 'react'
import { mount } from 'enzyme'

import { test } from 'lib'

import ResetPassword from './container'

const { MockProvider } = test

describe('(Container) ResetPassword:', () => {
  const wrapper = mount(
    <MockProvider>
       <ResetPassword />
    </MockProvider>
  )

  it('Should render a form.', () => {
    const formElement = wrapper.find('form')

    expect(formElement.length).toBe(1)
  })

  it('Should render one input.', () => {
    const inputElement = wrapper.find('Field')

    expect(inputElement.length).toBe(1)
  })

  it('Should render a submit button', () => {
    const buttonElement = wrapper.find('button')

    expect(buttonElement.length).toBe(1)
  })
})
