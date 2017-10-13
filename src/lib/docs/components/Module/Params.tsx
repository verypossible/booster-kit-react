import * as React from 'react'
import styled from 'styled-components'

import Markdown from '../Markdown'

interface CProps {
  className?: string,
  name: string,
  type: string
}

const Component: React.SFC<CProps> = ({ className, name, type }) => (
  <div className={className}>
    <Markdown>{`<code>${name}</code>: <span>${type}</span>`}</Markdown>
  </div>
)

const Param = styled(Component)`
  margin-left: 1em;
  font-family: Roboto;
  span > p {
    margin: 0.5em;
    font-size: 0.8em;

    > code {
      font-weight: bold;
    }
  }
`

const ParamsLayout = styled.div`
  grid-area: params;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto auto auto;
  grid-template-areas:
    "label1 label2 label3 label4 label5 label6"
    "field1 field2 field3 field4 field5 field6";
  padding: 0 0 0 1em;
`

interface LabelProps {
  area: string
}

const Label = styled.p`
  grid-area: ${(props: LabelProps) => props.area};
  color: #ccc;
`

const Params = ({ params }) => {
  return (
    <ParamsLayout>
      <Label area='label1'>name</Label>
      <Label area='label2'>type</Label>
      <Label area='label3'>required</Label>
      <Label area='label4'>source</Label>
      {params.map(p => <Param key={p.name} name={p.name} type={p.type} />)}
    </ParamsLayout>
  )
}

export default Params
