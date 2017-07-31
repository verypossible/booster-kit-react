import * as React from 'react'

type props = {
  quoteText: string,
  citeText: string
}

import {
  Box,
  Cite,
  Quote
} from 'atoms'

const QuoteBlock = (props) => (
  <Box tag='section'>
    <Quote>{props.quoteText}</Quote>
    <Cite>{props.citeText}</Cite>
  </Box>
)

export default QuoteBlock
