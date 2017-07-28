import { reduxForm } from 'redux-form'

import { compose } from 'lib/helpers'

import { defaultHandleSubmit, defaultOnSuccess } from './defaultHandlers'
import formHOC from './formHOC'
import { onSubmitHandler } from './onSubmitHandler'

const withFormWrapper = ({
  destroyOnUnmount = false,
  enableReinitialize = false,
  form = 'anonymousForm',
  handleSubmit = defaultHandleSubmit,
  keepDirtyOnReinitialize = false,
  pure = true,
  onSuccess = defaultOnSuccess,
  submitButtonText = 'Submit'
}: FormConfig) => {
  return compose(
    reduxForm({
      destroyOnUnmount,
      enableReinitialize,
      form,
      keepDirtyOnReinitialize,
      onSubmit: onSubmitHandler(handleSubmit),
      pure
    }),
    formHOC({
      form,
      onSuccess,
      submitButtonText
    })
  )
}

export default withFormWrapper
