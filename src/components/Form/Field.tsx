import * as React from 'react'

import { Box, Form, Icon, Span } from 'atoms'

const { Input, Label } = Form

const Field: React.SFC<FormField> = ({
  input, label, placeholder, type, meta: { touched, error }, disabled
}) => (
  <Box>
    <Label htmlFor={input.name}>{label}</Label>
    <Input
      {...input}
      id={input.name}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
    />
    {touched && error && <Span><Icon status='warning' icon='AlertCircle' />{error}</Span>}
  </Box>
)

export default Field
