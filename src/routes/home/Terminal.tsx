import * as React from 'react'

import atom from 'ui'

import { Box, Icon, Markdown } from 'atoms'

import code from './code.md'

const TaskBar = atom.div`
  display: inline-block;
  width: 100%;
  height: 25px;
  background-color: #CCC;
  border-radius: 5px 5px 0 0;
`

const icon = {
  icon: 'CustomCircle',
  margin: { top: '0.3', left: '0.5'},
  noFlex: true,
  width: '1'
}

const Terminal = () => (
  <Box area={{ col: 'rightMiddle' }} background='rgb(45, 45, 45)' width='3/4' height='15' round='0.5' noFlex>
    <TaskBar>
      <Icon fill='#FF6152' {...icon} />
      <Icon fill='#FFC400' {...icon} />
      <Icon fill='#00CF2C' {...icon} />
    </TaskBar>
    <Markdown markdown={code} />
  </Box>
)

export default Terminal
