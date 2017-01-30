import React from 'react'
import { mount } from 'enzyme'

import { test } from 'lib'

import Login from './container'

const { MockBrowser } = test

describe('(Container) Login:', () => {
  const wrapper = mount(
    <MockBrowser>
       <Login />
    </MockBrowser>
  )

  it('Should render a form.', () => {
    const formElement = wrapper.find('form')

    expect(formElement.length).toBe(1)
  })

  it('Should render two inputs.', () => {
    const inputElement = wrapper.find('Field')

    expect(inputElement.length).toBe(2)
  })

  it('Should render a submit button', () => {
    const buttonElement = wrapper.find('button')

    expect(buttonElement.length).toBe(1)
  })
})
