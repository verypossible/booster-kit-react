/** When we add more input component types, add them to the type field */
interface FormCommon {
  label?: string,
  placeholder?: string,
  type: string
}

declare interface FormInput extends FormCommon {
  name: string
}

declare interface FormField extends FormCommon {
  input: {
    name: string
  },
  meta: {
    touched: boolean,
    error: boolean | string
  }
  disabled: boolean
}

declare interface FieldSetConfig {
  fields: FormInput[]
}

declare type FormFieldSelector = React.SFC<FormInput> | React.ComponentClass<FormInput>

declare interface FormProps {
  children?: any,
  formName: string,
  handleSubmit: () => void,
  pristine: boolean,
  submitting: boolean,
  submitText: string,
  error: string
}

declare interface FormCompletedProps {
  message?: string,
  redirectTo?: {
    pathname: string,
    state?: object
  }
}
