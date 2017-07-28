import * as React from 'react'

import { Form } from 'atoms'
import FormError from './FormError'

const { Input, Label } = Form

const Field: React.SFC<FormField> = ({
  input, label, placeholder, type, meta: { touched, error }
}) => (
  <div>
    <Label htmlFor={input.name}>{label}</Label>
    <Input
      {...input}
      id={input.name}
      placeholder={placeholder}
      type={type}
    />
    {touched && error && <FormError error={error} />}
  </div>
)

export default Field
