import * as React from 'react'
import styled from 'styled-components'

interface Props {
  border?: string,
  children?: any,
  className?: string
}

const Component: React.SFC<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
)

const ItemWrapper = styled(Component)`
  border: ${(props: Props) => props.border || 'none'};
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 30px auto auto;
  grid-template-areas:
    "headerLeft . headerRight"
    "comment comment comment"
    "code code code"
    "params params params"
    "loc loc loc";
  width: 100%;
  margin: 0 0 40px 0;
  justify-items: start;
`

export default ItemWrapper
