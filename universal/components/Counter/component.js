/* @flow */
import React from 'react'
import styles from './styles.css'

type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function
}

export const Counter = (props: Props) => (
  <div>
    <h2 className={styles.counterContainer}>
      Counter:
      {' '}
      <span className={styles['counter--green']}>
        {props.counter}
      </span>
    </h2>
    <button id='counterIncrement' className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Counter
