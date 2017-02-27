/* @Flow */
import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'

import { FormField, SubmissionError } from 'components/Forms'

import styles from './styles.css'
import type { Form } from '../types'

const SignUp = ({ handleSubmit, submitting, pristine, submitSucceeded, error }: Form) => {
  if (submitSucceeded) {
    return (
      <div>Changing the world one small step at a time...You created an account!</div>
    )
  }

  return (
    <div className={styles.container}>
      <h2>Signup</h2>
      <p className={styles.subtitle}>
        If you're ready to change the world, then go ahead and create your free account.
      </p>
      <form>
        <Field
          name='email'
          type='text'
          component={FormField}
          label='Your email address'
          placeholder='you@company.com' />
        <Field
          name='password'
          type='password'
          component={FormField}
          label='Set password'
          placeholder='Must be six characters or more' />
        <Field
          name='confirmPassword'
          type='password'
          component={FormField}
          label='Verify password'
          placeholder="Let's make sure your passwords match" />
        {error && <SubmissionError error={error} />}
        <button className={styles.formButton} onClick={handleSubmit} disabled={pristine || submitting}>
          {submitting ? 'Submitting...' : 'Create Account'}
        </button>
      </form>
      <p className={styles.terms}>
        Already have an account yet? <Link to='/login' id='login'>Login</Link>
      </p>
    </div>
  )
}

export default SignUp
