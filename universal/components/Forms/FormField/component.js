/* @flow */
import React from 'react'
import styles from './styles.css'

type Props = {
  input: Object,
  label: string,
  meta: Object,
  type: string,
  placeholder: string
}

const FormField = ({ input, label, placeholder, type, meta: { touched, error } }: Props) => {
  return (
    <div className={styles.inputWrap}>
      <label className={styles.label} htmlFor={`input-${input.name}`}>{label}</label>
      <input className={styles.input} id={`input-${input.name}`} {...input} placeholder={placeholder} type={type} />
      {touched && error && <div className={styles.error}>{error}</div>}
    </div>
  )
}
export default FormField
