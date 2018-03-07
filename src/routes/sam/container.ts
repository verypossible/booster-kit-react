import { SubmissionError } from 'redux-form'

import { post } from './api'
import form from './form'

interface ILoginValues {
  email: string
  password: string
}

interface IVerifyValues {
  code: string
}

const handleLogin = (values: ILoginValues) => {
  return post<ILoginValues>('authenticate', values).then(
    result => result,
    () => new SubmissionError({ _error: 'There was a problem logging in.' })
  )
}

const handleVerify = (values: IVerifyValues) => {
  return post<IVerifyValues>('authenticate', values).then(
    result => result,
    () => new SubmissionError({ _error: 'There was a problem verifying.' })
  )
}

export const loginContainer = form({
  form: 'login',
  onSubmit: handleLogin
})

export const verifyContainer = form({
  form: 'handleVerify',
  onSubmit: handleVerify
})
