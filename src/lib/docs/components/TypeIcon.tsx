import styled from 'styled-components'

import * as icons from '../assets/icons.png'

interface Props {
  dataIcon: string
}

const coords = (xCoord, yCoord) => `${xCoord}px ${yCoord}px`

const focusIcon = {
  Function: coords(-136, -68),
  Interface: coords(0, -68),
  TypeAlias: coords(0, -170),
  Variable: coords(-136, -0)
}

const DocIcon = styled.i`
  position: relative;
  &::before {
    display: inline-block;
    background: url(${icons}) no-repeat ${(props: Props) => focusIcon[props.dataIcon]};
    content: '';
    width: 17px;
    height: 17px;
    margin: 0 3px 2px 0;
    vertical-align: middle;
  }
`

export default DocIcon
