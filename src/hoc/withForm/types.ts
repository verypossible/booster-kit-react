import { Dispatch } from 'lib/types'

export type OnSubmit = (formValues: object, dispatch?: Dispatch<Actions>, props?: object) => Promise<any>

export interface FormConfig {
  destroyOnUnmount?: boolean,
  enableReinitialize?: boolean,
  form?: string,
  keepDirtyOnReinitialize?: boolean,
  handleSubmit?: OnSubmit,
  pure?: boolean,
  validate?: () => void,
  onSuccess?: React.SFC<object>,
  submitButtonText?: string
}

export interface FormProps {
  handleSubmit: OnSubmit,
  pristine: boolean,
  submitting: boolean,
  submitSucceeded: boolean
}
