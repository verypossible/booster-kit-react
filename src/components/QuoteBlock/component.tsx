import * as React from 'react'

type props = {
    quoteText:string,
    citeText:string
}

import {
  Box,
  Quote,
  Cite
} from 'atoms'

const QuoteBlock = (props) => (
  <Box>
    <Quote>{props.quoteText}</Quote>
    <Cite>{props.citeText}</Cite>
  </Box>
)

export default QuoteBlock
