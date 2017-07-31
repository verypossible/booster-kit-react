import * as React from 'react'

import { FormWrapper } from 'components/Form'

import { getDisplayName } from '../helpers'

const withFormHOC = ({
  form,
  onSuccess,
  submitButtonText
}) => (FormFields: React.SFC<{}>) => {
  const CreateForm: React.SFC<FormProps & FormHOCProps> = ({
    submitSucceeded,
    ...props
  }) => submitSucceeded ? onSuccess({ ...props }) : (
    <FormWrapper formName={form} submitText={submitButtonText} {...props}>
      <FormFields />
    </FormWrapper>
  )

  CreateForm.displayName = getDisplayName(FormFields, 'form')

  return CreateForm
}

export default withFormHOC
