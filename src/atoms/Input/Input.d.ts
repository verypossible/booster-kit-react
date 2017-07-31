declare type InputType = 'text' | 'submit' | 'radio' | 'checkbox'

declare interface Input extends Theme {
  type?: InputType
  placeholder?: string
  name?: string
  value?: string
  className?: string
}
