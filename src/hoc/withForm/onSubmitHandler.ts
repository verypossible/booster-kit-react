import { SubmissionError } from 'redux-form'

import logger from 'lib/logger'

/**
 *   A HOF (higher order function) that takes a handleSubmit function passed in during
 *   initialization of withForm.
 *
 *   values and props are passed in via redux-form's internal onSubmit handler, then
 *   we are creating a form submission error handler to pass into the handleSubmit
 *   function along with values and props. Read more about redux-form here - https://goo.gl/U23dNp
 *   This gives you access to all form values and upstream props in the handleSubmit method.
 *
 *   We are ommitting redux-forms second argument - dispatch - in favor of using
 *   dispatch from connect. If you need to dispatch an action in your handleSubmit function,
 *   compose the container with connect or connectState before withForm, then you will
 *   have access to dispatch via the props.
 *
 *   To see a working example, reference components/SignUpForm/index.tsx
 */

export const onSubmitHandler = <Data, Props, Errors>(
  handleSubmit: HandleSubmit<Data, Props, Errors>
) => (values: Data, _, props: Props) => {
  const submitError = ({ response, errors }) => {
    logger.log.error('Error in hoc/withForm', { response })
    throw new SubmissionError(errors)
  }
  return handleSubmit({ values, props, submitError })
}
