/* @Flow */
import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'

import { FormField, SubmissionError } from 'components/Forms'

import styles from './styles.css'
import type { Form } from '../types'

const Login = ({ handleSubmit, submitting, pristine, submitSucceeded, error }: Form) => {
  if (submitSucceeded) {
    return (
      <div>Hoozah...You logged in!</div>
    )
  }

  return (
    <div className={styles.container}>
      <h2>Sign in to your account</h2>
      <form id='loginForm'>
        <Field
          name='email'
          type='text'
          component={FormField}
          label='Account email'
          placeholder='you@company.com' />
        <Field
          name='password'
          type='password'
          component={FormField}
          label='Account password'
          placeholder='Enter your password' />
        {error && <SubmissionError error={error} />}
        <button type='submit' className={styles.formButton} onClick={handleSubmit} disabled={pristine || submitting}>
          {submitting ? 'Authenticating...' : 'Login'}
        </button>
      </form>
      <p className={styles.terms}>
        Don't have an account yet? <Link to='/signup' id='signup'>Create An Account</Link>
      </p>
    </div>
  )
}

export default Login
