import * as React from 'react'

import { Box } from 'atoms'
import { BoxProps } from 'atoms/Box'

/** Accepts these plus any BoxProp */
interface TwoColumnProps extends BoxProps {
  children?: any,
  split: '1/2' | '1/3' | '1/4' | '2/3' | '3/4'
}

/** Column layout presets. If a preset isn't matched, the custom value will be used. */
const configCols = {
  '1/2': 'left 1 / right 1',
  '1/3': 'left 1 / right 2',
  '1/4': 'left 1 / right 3',
  '2/3': 'left 2 / right 1',
  '3/4': 'left 3 / right 1'
}

/** Renders a two column grid. Rows are auto unless a `rows` prop is passed in. */
const TwoColumn: React.StatelessComponent<TwoColumnProps> = ({ children, split, ...props }) => (
  <Box columns={configCols[split] || split} {...props} >
    {children}
  </Box>
)

export default TwoColumn
