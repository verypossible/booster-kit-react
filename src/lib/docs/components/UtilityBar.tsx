import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'

import Navigate from './Navigate'

interface Props {
  history: History
}

const UtilityWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 33% 34% 33%;
  grid-template-areas:
    "utilLeft utilMid utilRight";
  align-content: center;
  position: fixed;
  bottom: 0;
  background: white;
`

const UtilityLeft = styled.div`
  grid-area: utilLeft;
`

const UtilityBar: React.SFC<RouteComponentProps<Props>> = ({ history }) => (
  <UtilityWrapper>
    <UtilityLeft>
      <Navigate history={history} color='black' to='back' />
    </UtilityLeft>
  </UtilityWrapper>
)

export default UtilityBar
