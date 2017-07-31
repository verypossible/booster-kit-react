import * as React from 'react'

import {
  Box,
  Icon,
  Image,
  Input,
  Paragraph
} from 'atoms'

import Card from 'components/Card'
import QuoteBlock from 'components/QuoteBlock'

import * as rocket from './rocket.png'

const HomeView = () => (
  <Box>
    <Image
      alt='To infinity and beyond!'
      className='logo'
      src={rocket}
    />
    <Paragraph>If you don't see an icon below, something is wrong with icon fonts...</Paragraph>
    <Icon icon='Logo' status='ok' />
    <Card />
    <QuoteBlock quoteText='Oh, Hiiiii, Mark' citeText='Tommy Wiseau' />
    <Input type='text' placeholder='Placeholder Text' />
  </Box>
)

export default HomeView
