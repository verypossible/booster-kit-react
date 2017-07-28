import * as React from 'react'
import { Field as FormField } from 'redux-form'

import RenderField from './Field'

/** Maps registered inputType components to a reduxForm FormField component */
const FieldSelector: FormFieldSelector = ({ label, name, placeholder, type, ...props }) => {
  const inputTypes = {
    email: RenderField,
    password: RenderField,
    text: RenderField
  }

  const matchedInput = inputTypes[type]

  return (
    <FormField
      component={!matchedInput ? RenderField : matchedInput}
      label={label}
      name={name}
      placeholder={placeholder}
      props={props}
      type={type}
    />
  )
}

export default FieldSelector
