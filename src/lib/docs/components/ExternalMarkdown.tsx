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
  width: 100%;
  height: 100%;
  p {
    margin-bottom: 0.5em;
  }
  pre > code {
    display: block;
    background-color: rgb(45, 45, 45);
    color: white;
    padding: 1em;
  }

`
