import Prism from 'prismjs'
import * as React from 'react'
import styled from 'styled-components'

interface StyleProps {
  area?: string
}

interface Props {
  className?: string,
  code: string
}

export const CodeBlockMarkup: React.SFC<Props> = ({ className, code }) => (
  <pre className={className}>
    <code
      className='language-javascript'
      dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript)}}
    />
  </pre>
)

export default styled(CodeBlockMarkup)`
  ${(props: StyleProps) => props.area && `
    grid-area: ${props.area};
  `}
  display: block;
  background-color: rgb(45, 45, 45);
  color: white;
  padding: 1em;
`
