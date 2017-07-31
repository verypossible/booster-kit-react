import * as React from 'react'

import {
  Box,
  Cite,
  Quote
} from 'atoms'

export interface Quote {
 quote: string,
 citation: string
}

const QuoteBlock = ({ quote, citation }: Quote) => (
  <Box tag='section'>
    <Quote>{quote}</Quote>
    <Cite>{citation}</Cite>
  </Box>
)

export default QuoteBlock
