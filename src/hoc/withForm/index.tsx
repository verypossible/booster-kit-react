import { reduxForm } from 'redux-form'

import { compose } from 'lib/helpers'

import { defaultHandleSubmit, defaultOnSuccess } from './defaultHandlers'
import formHOC from './formHOC'
import { FormConfig } from './types'

const withFormWrapper = ({
  destroyOnUnmount = false,
  enableReinitialize = false,
  form = 'anonymousForm',
  onSubmit = defaultHandleSubmit,
  keepDirtyOnReinitialize = false,
  pure = true,
  onSuccess = defaultOnSuccess,
  submitButtonText = 'Submit'
}: FormConfig = {}) => compose(
  reduxForm({
    destroyOnUnmount,
    enableReinitialize,
    form,
    keepDirtyOnReinitialize,
    onSubmit,
    pure
  }),
  formHOC({
    form,
    onSuccess,
    submitButtonText
  })
)

export default withFormWrapper
