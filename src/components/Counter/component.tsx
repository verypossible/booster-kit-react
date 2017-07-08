import * as React from 'react'

import Box from 'atoms/Box'
import Button from 'atoms/Button'
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
  <Box>
    <H2>
      Counter: <Span color='lightGray'>{counter}</Span>
    </H2>
    <Button id='counterIncrement' onClick={single}>
      Increment
    </Button>
    <Button onClick={double}>
      Double (Async)
    </Button>
  </Box>
)

export default Counter
