import 'prismjs/themes/prism-tomorrow.css'

import * as React from 'react'

import atom from 'ui'

interface Props extends Theme {
  className?: string,
  markdown: string
}

const Markdown: React.SFC<Props> = ({ className, markdown }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: markdown }} />
)

export default atom(Markdown)`
  width: 100%;
  height: 100%;
  p {
    margin-bottom: 0.5em;
  }
  pre > code {
    display: block;
    background-color: rgb(45, 45, 45);
    padding: 1em;
  }
`
