/** When we add more input component types, add them to the type field */
declare interface CommonInputInterface {
  label?: string,
  placeholder?: string,
  type: 'email' | 'password' | 'text'
}

declare interface FormInput extends CommonInputInterface {
  name: string
}

declare interface FormField extends CommonInputInterface {
  input: {
    name: string
  },
  meta: {
    touched: boolean,
    error: boolean | string
  }
  disabled: boolean
}

declare type ReduxInput = React.SFC<FormInput> | React.ComponentClass<FormInput>
