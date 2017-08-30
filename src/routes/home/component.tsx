import { Link } from 'lib/router'
import * as React from 'react'

import {
  Anchor,
  Box,
  Button,
  Icon,
  Paragraph,
  Span
} from 'atoms'

import renderIcons from './RenderIcons'
import Terminal from './Terminal'

const Nav = () => (
  <Box area='leftMiddle'>
    <Link to='docs'>
      <Button color='primaryInverse'>
        Docs
      </Button>
    </Link>
  </Box>
)

const LogoGrid = () => (
  <Box
    area='rightBottom'
    autoFlow='row'
    align='center'
    columns='repeat(auto-fit, minmax(50px, 1fr))'
    justify='center'
    rows='100px / 100px / 100px'
    pad='large'
  >
    <Span color='#CCC'>Powered By</Span>
    {renderIcons}
  </Box>
)

const LeftHeader = () => (
  <Box area='leftTop' align='end' justify='center' grid>
    <Icon icon='Trademark' color='primary' width='3' align='end' />
    <Paragraph color='primary'>Learn The Framework</Paragraph>
  </Box>
)

const RightHeader = () => (
  <Box area='rightTop' alignContent='start' justify='end' margin={{ right: 'medium' }} grid>
    <Anchor
      to='https://github.com/verypossible/booster-kit-react'
      color='primaryInverse'
      margin='small'
      display='flex'
      height='full'
      align='center'
    >
      view on <Icon icon='Github' color='primaryInverse' width='xXLarge' margin={{ left: 'medium' }} />
    </Anchor>
  </Box>
)

const HomeView = () => (
  <Box height='fullvh' columns='left 1 / right 3'>
    <Box area='left' justify='center' background='backgroundInverse' rows='leftTop / leftMiddle / leftBottom'>
      <LeftHeader />
      <Nav />
    </Box>
    <Box area='left' rows='rightTop / rightMiddle / rightBottom'>
      <RightHeader />
      <Terminal />
      <LogoGrid />
    </Box>
  </Box>
)

export default HomeView
