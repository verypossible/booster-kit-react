import * as React from 'react'

import GridContainer from 'atoms/GridContainer'

interface TwoColumnProps {
  children?: any,
  gutters?: string,
  leftWidth?: number
}

const TwoColumn: React.StatelessComponent<TwoColumnProps> = ({
  children,
  leftWidth = 50,
  gutters
}) => {
  const rightWidth = 100 - leftWidth
  const columns = `${leftWidth}% ${rightWidth}%`
  return (
    <GridContainer columns={columns} rows='auto auto' gutters={gutters}>
      {children}
    </GridContainer>
  )
}

export default TwoColumn
