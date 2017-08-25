import 'prismjs/themes/prism-tomorrow.css'

import * as React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string,
  markdown: string
}

const Markdown: React.SFC<Props> = ({ className, markdown }) => (
  <div className={className} key={name} dangerouslySetInnerHTML={{ __html: markdown }} />
)

export default styled(Markdown)`
  color: black;
`
