declare interface SubmitError<Errors, FieldErrors> {
  errors: { _error?: string } | FieldErrors
  response: object[]
}

declare interface OnSubmitOptions<D, P, E> {
  props: P
  submitError: (errorParams: SubmitError<E>) => Error
  values: D
}

/**
 * Data: The field names and corresponding types.
 * Props: The expected props to be present from parents
 * Result: The result action
 * Errors: The error object to pass to the form's SubmissionError
 */
declare type HandleSubmit<Data, Props, Errors> = (
  {
    props,
    submitError,
    values
  }: {
    props: Props
    submitError: (error: SubmitError<Errors, Data>) => Error
    values: Data
  }
) => Promise<void | Error>

declare interface FormConfig {
  destroyOnUnmount?: boolean
  enableReinitialize?: boolean
  form: string
  keepDirtyOnReinitialize?: boolean
  handleSubmit: HandleSubmit
  pure?: boolean
  validate?: () => void
  onSuccess?: React.SFC<object>
  submitButtonText?: string
}

declare interface FormHOCProps {
  submitSucceeded: boolean
}
