import * as React from 'react'

import { Box, Button, Icon } from 'atoms'
import { Form } from 'atoms/Form'

import FormError from './FormError'

const FormWrapper: React.SFC<FormProps> = ({
  children,
  error,
  formName,
  handleSubmit,
  pristine,
  submitting,
  submitText
}) => (
  <Form id={formName} onSubmit={handleSubmit}>
    {children}
    <Box>
      <Button
        id={`${formName}SubmitButton`}
        type='submit'
        disabled={pristine || submitting}
      >
        {submitting ? <Icon icon='Loader' /> : submitText}
      </Button>
      {error && <FormError error={error} />}
    </Box>
  </Form>
)

export default FormWrapper
