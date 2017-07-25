import * as React from 'react'
import { Field as FormField } from 'redux-form'

import Field from './Field'

const inputTypes = {
  email: Field,
  password: Field,
  text: Field
}

/** Maps registered inputType components to a reduxForm FormField component */
const CreateReduxFormField: ReduxInput = ({ label, name, placeholder, type, ...props }) => {
  const formFieldProps = {
    component: inputTypes[type], label, name, placeholder, props, type, ...props
  }
  return <FormField {...formFieldProps} />
}

export default CreateReduxFormField
