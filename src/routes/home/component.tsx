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
import AutoColumnGrid from 'layouts/AutoColumnGrid'
import TwoColumn from 'layouts/TwoColumn'

import renderIcons from './RenderIcons'
import Terminal from './Terminal'

const Nav = () => (
  <Box area={{ col: 'leftBottom' }} justifySelf='center'>
    <Link to='docs'>
      <Button color='primaryInverse'>
        Docs
      </Button>
    </Link>
  </Box>
)

const LogoGrid = () => (
  <AutoColumnGrid area={{ col: 'rightBottom' }} align='center' justify='center' rows='100px 100px 100px'>
    <Span color='#CCC'>Powered By</Span>
    {renderIcons}
  </AutoColumnGrid>
)

const LeftHeader = () => (
  <Box area={{ col: 'leftTop' }} align='end' justify='center' grid>
    <Icon icon='Trademark' color='primary' width='3' />
    <Paragraph color='primary'>Learn The Framework</Paragraph>
  </Box>
)

const RightHeader = () => (
  <Box area={{ col: 'rightTop' }} align='end' margin={{ right: 'medium' }} grid>
    <Anchor
      to='https://github.com/verypossible/booster-kit-react'
      color='primaryInverse'
      margin='small'
      height='full'
      align='center'
    >
      view on <Icon icon='Github' color='primaryInverse' width='xXLarge' margin={{ left: 'medium' }} />
    </Anchor>
  </Box>
)

const HomeView = () => (
  <TwoColumn split='1/4' height='fullvh' width='100%'>
    <Box
      area={{ col: 'left' }}
      background='backgroundInverse'
      rows='leftTop / leftMiddle / leftBottom'
    >
      <LeftHeader />
      <Nav />
    </Box>
    <Box area={{ col: 'right' }} rows='rightTop / rightMiddle / rightBottom'>
      <RightHeader />
      <Terminal />
      <LogoGrid />
    </Box>
  </TwoColumn>
)

export default HomeView
