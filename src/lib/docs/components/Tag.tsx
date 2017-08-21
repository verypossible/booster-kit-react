import styled from 'styled-components'

interface Props {
  exported?: boolean
}

const background = ({ exported }: Props) => `
  background-color: ${
    (!exported && 'rgb(97, 97, 97)') ||
    (exported && 'rgb(96, 189, 3)') ||
    '#ccc'
  };
`

const Tag = styled.span`
  ${background}
  padding: 5px 10px;
  color: white;
  width: fit-content;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 0.6em;
  font-weight: 300;
`

export default Tag
