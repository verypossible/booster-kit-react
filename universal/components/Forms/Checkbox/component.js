/* @flow */
import React from 'react'
import styles from './styles.css'

type Props = {
  label: string,
  meta: Object
}

const CheckBox = ({ label }: Props) => {
  return (
    <div className={styles.inputWrap}>
      <input type='checkbox' className={styles.check} placeholder={label} />
      <label className={styles.label}>{label}</label>
    </div>
  )
}
export default CheckBox
