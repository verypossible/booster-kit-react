import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'

import Icon from './Icon'
import Navigate from './Navigate'

interface Props {
  history: History
}

const UtilityWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: grid;
  grid-template-columns: 33% 34% 33%;
  grid-template-areas:
    "utilLeft utilMid utilRight";
  align-items: center;
  position: fixed;
  padding: 1em 0;
  bottom: 0;
  background: white;
`

const UtilityLeft = styled.div`
  grid-area: utilLeft;
`

const UtilityMid = styled.div`
  grid-area: utilMid;
`

const Warning = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(204, 144, 54);
  border-radius: 10px;
  height: 35px;
  color: white;
  font-family: Roboto;
  padding: 0.5em;
  > i {
    margin-right: 1em;
  }
`

const UtilityBar: React.SFC<RouteComponentProps<Props>> = ({ history }) => (
  <UtilityWrapper>
    <UtilityLeft>
      <Navigate history={history} color='black' to='back' swapIcon>Back</Navigate>
    </UtilityLeft>
    <UtilityMid>
      <Warning>
        <Icon icon='AlertTriangle' />
        This section is under active development.
      </Warning>
    </UtilityMid>
  </UtilityWrapper>
)

export default UtilityBar
