import * as React from 'react'

import { H2 } from 'atoms/Headers'
import Span from 'atoms/Span'

interface CounterProps {
  counter: number,
  double: () => void,
  single: () => void
}

const Counter: React.SFC<CounterProps> = ({
  double,
  counter,
  single
}) => (
  <div>
    <H2>
      Counte: <Span color='accent'>{counter}</Span>
    </H2>
    <button id='counterIncrement' className='btn btn-default' onClick={single}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={double}>
      Double (Async)
    </button>
  </div>
)

export default Counter
