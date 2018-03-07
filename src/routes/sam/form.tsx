import * as React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Box, Button, Form, Input, Span } from './atoms'

const makeForm = (config: any) => reduxForm(config)

export interface IForm {
  buttonText?: string
  children?: any
  error?: string
  handleSubmit?: (e: any) => void
  submitting?: boolean
  pristine?: boolean
  submitSucceeded?: boolean
  onSuccess?: React.ReactElement<any>
}

export interface IField {
  name: string
  type: string
  input?: {
    [key: string]: any
  }
  meta?: {
    touched: boolean
    error: string
  }
}

export const ConnectedForm = ({
  buttonText = 'Submit',
  children,
  error,
  handleSubmit,
  submitting,
  pristine,
  submitSucceeded,
  onSuccess: OnSuccess
}: IForm) =>
  (submitSucceeded && OnSuccess) || (
    <Form onSubmit={handleSubmit}>
      {children}
      <Button disabled={submitting || pristine}>
        {submitting ? 'Loading...' : buttonText}
      </Button>
      {error && <Span color="red">{error}</Span>}
    </Form>
  )

export const RenderField = ({
  name,
  type,
  input,
  meta: { touched, error }
}: IField) => (
  <Box>
    <Input name={name} type={type} {...input} />
    {touched && error && <Span color="red">{error}</Span>}
  </Box>
)

export const fieldMap = (fields: IField[]) =>
  fields.map(f => <Field key={f.name} component={RenderField} {...f} />)

export default makeForm
