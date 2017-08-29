import { Link } from 'lib/router'
import * as React from 'react'

import {
  Box,
  Button,
  Icon,
  Span
} from 'atoms'

import renderIcons from './renderIcons'

const layout = {
  columns: 'left 1 / right 3'
}

const Links = () => (
  <Box row='middle' justify='end'>
    <Link to='docs'>
      <Button color='primaryInverse'>
        Docs
      </Button>
    </Link>
  </Box>
)

const Logos = () => (
  <Box
    row='middle'
    autoFlow='row'
    align='center'
    columns='repeat(auto-fit, minmax(100px, 1fr))'
    justify='center'
    rows='100px / 100px / 100px'
  >
    {renderIcons}
  </Box>
)

const Footer = () => (
  <Box row='bottom' grid>
      <Icon icon='Logo' color='primary' size='5em' />
  </Box>
)

const HomeView = () => (
  <Box height='100vh' columns='left 1 / right 3'>
    <Box column='left' justify='center' background='backgroundInverse' rows='top / middle / bottom'>
      <Links />
      <Footer />
    </Box>
    <Box column='right' rows='top / middle / bottom'>
      <Logos />
    </Box>
  </Box>
)

export default HomeView
