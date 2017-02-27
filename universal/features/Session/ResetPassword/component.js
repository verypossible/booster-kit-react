/* @Flow */
import React from 'react'
import { Field } from 'redux-form'

import { FormField, SubmissionError } from 'components/Forms'

import styles from './styles.css'
import type { Form } from '../types'

const ResetPassword = ({ handleSubmit, submitting, pristine, submitSucceeded, error }: Form) => {
  if (submitSucceeded) {
    return (
      <div>We've sent you an email with instructions to set your new password.</div>
    )
  }

  return (
    <div className={styles.container}>
      <h2>Reset Your Account Password</h2>
      <form id='loginForm'>
        <Field
          name='email'
          type='text'
          component={FormField}
          label='Account email'
          placeholder='you@company.com' />
        {error && <SubmissionError error={error} />}
        <button type='submit' className={styles.formButton} onClick={handleSubmit} disabled={pristine || submitting}>
          {submitting ? 'Processing...' : 'Reset Password'}
        </button>
      </form>
    </div>
  )
}

export default ResetPassword
