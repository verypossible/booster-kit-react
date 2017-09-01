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
  <Box justify='center' align='center'>
    <Link to='docs'>
      <Button invert>
        Docs
      </Button>
    </Link>
  </Box>
)

const LogoGrid = () => (
  <AutoColumnGrid alignItems='center' justifyItems='center' rows='100px 100px 100px'>
    <Span color='lightGray' noFlex>Powered By</Span>
    {renderIcons}
  </AutoColumnGrid>
)

const LeftHeader = () => (
  <Box justifyContent='center' justify='end' alignItems='center' flow='column wrap'>
    <Icon icon='Trademark' width='3' height='3' invert/>
    <Paragraph invert>Learn The Framework</Paragraph>
  </Box>
)

const RightHeader = () => (
  <Box justify='end' pad='0 medium 0 0'>
    <Anchor
      to='https://github.com/verypossible/booster-kit-react'
      alignSelf='start'
      justify='end'
      height='1/2'
      invert
    >
      <Span alignItems='center' justify='end'>view on</Span>
      <Icon icon='Github' width='xXLarge' margin='0 0 0 medium' />
    </Anchor>
  </Box>
)

const HomeView = () => (
  <TwoColumn split='1/4' height='fullvh' width='full'>
    <Box rows='leftTop / leftMiddle / leftBottom' invertBg>
      <LeftHeader />
      <Nav />
    </Box>
    <Box rows='rightTop / rightMiddle / rightBottom' pad='medium medium 0'>
      <RightHeader />
      <Terminal />
      <LogoGrid />
    </Box>
  </TwoColumn>
)

export default HomeView
