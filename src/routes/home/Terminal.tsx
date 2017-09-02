import * as React from 'react'

import atom from 'ui'

import { Box, Icon, Markdown } from 'atoms'

import * as code from './code.md'

const TaskBar = atom.div`
  display: inline-block;
  width: 100%;
  height: 25px;
  background-color: #CCC;
  border-radius: 5px 5px 0 0;
`

const icon = {
  icon: 'CustomCircle',
  margin: '0.3 0 0 0.5',
  noFlex: true,
  width: '1'
}

const Terminal = () => (
  <Box background='rgb(45, 45, 45)' height='15' width='3/4' margin='0 auto' round='0.5' noFlex>
    <TaskBar>
      <Icon fill='#FF6152' {...icon} />
      <Icon fill='#FFC400' {...icon} />
      <Icon fill='#00CF2C' {...icon} />
    </TaskBar>
    <Markdown markdown={code} />
  </Box>
)

export default Terminal
