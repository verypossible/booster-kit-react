/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
}

const <%= pascalEntityName %> = ({ title = '<%= pascalEntityName %>' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default <%= pascalEntityName %>
