import hoistStatics from 'hoist-non-react-statics'
import * as React from 'react'

import { Box, Button } from 'atoms'
import { Form } from 'atoms/Form'

import { getDisplayName } from '../helpers'

import { FormProps } from './types'

const withFormHOC = ({
  form,
  onSuccess,
  submitButtonText
}) => (FormFields: React.SFC<object>) => {
  const CreateForm: React.SFC<FormProps> = ({ handleSubmit, pristine, submitting, submitSucceeded, ...props }) => {
    return submitSucceeded ? onSuccess({ ...props }) : (
      <Form id={form} onSubmit={handleSubmit}>
        <FormFields />
        <Box>
          <Button
            id={`${form}SubmitButton`}
            type='submit'
            disabled={pristine || submitting}
          >
            {submitButtonText}
          </Button>
        </Box>
      </Form>
    )
  }

  CreateForm.displayName = getDisplayName(FormFields, 'form')

  return CreateForm
}

export default withFormHOC
