import * as React from 'react'

import {
  Box,
  Button,
  H2,
  Span
} from 'atoms'

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
    <Button id='incrementCounter' onClick={single}>
      Increment
    </Button>
    <Button onClick={double}>
      Double (Async)
    </Button>
  </Box>
)

export default Counter
