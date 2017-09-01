import * as React from 'react'

import { Dispatch } from 'lib/types'

import {
  Box,
  Button,
  Header,
  Span
} from 'atoms'

interface CounterProps {
  counter: number,
  double: Dispatch<CounterActions>,
  single: Dispatch<CounterActions>
}

const Counter: React.SFC<CounterProps> = ({
  double,
  counter,
  single
}) => (
  <Box>
    <Header tag='h2'>
      Counter: <Span id='count' color='lightGray'>{counter}</Span>
    </Header>
    <Button
      id='incrementCounter'
      onClick={single}
    >
      Increment
    </Button>
    <Button onClick={double}>
      Double (Async)
    </Button>
  </Box>
)

export default Counter
