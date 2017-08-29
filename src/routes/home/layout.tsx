import * as React from 'react'

import { Box } from 'atoms'

export const ROW = {
  LEFT: 'left-start',
  RIGHT: 'right-start',
  RIGHT_END: 'right-end'
}

const Grid = ({ children }) => (
  <Box
    display='grid'
    columns='[left-start] 25% [right-start] 75% [right-end]'
    rows='[top-start] auto [middle-start] auto [bottom-start] auto [bottom-end]'
    justifyItems='center'
    height='100vh'
  >
    {children}
  </Box>
)

export default Grid
