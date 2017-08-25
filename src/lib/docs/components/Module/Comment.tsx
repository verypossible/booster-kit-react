import * as React from 'react'
import styled from 'styled-components'

import Markdown from '../Markdown'

interface StyleProps {
  area: string
}

interface Props {
  className?: string,
  text: string
}

const Component: React.SFC<Props> = ({ className, text }) => <Markdown className={className}>{text}</Markdown>

const Comment = styled(Component)`
  ${(props: StyleProps) => props.area && `
    grid-area: ${props.area};
  `}
  > p {
    font-family: Roboto;
    margin: 0;
    > code {
      background-color: #F9F2F4;
      color: #C7254E;
      border-radius: 0.25em;
      font-size: 90%;
      padding: 0.2em 0.3em;
    }
  }
`

export default Comment
