import * as React from 'react'

import atom from 'ui'

interface Props {
  align?: string,
  area?: string,
  color?: string,
  height?: string,
  justify?: string
}

const Grid = atom.div`
  display: grid;
  grid-template-columns: [left-start] 25% [left-end right-start] 75% [right-end];
  grid-tempalte-rows: auto;
  width: 100%;
  grid-gap: 1em;
  align-items: stretch;
`

const Box = atom.div`
  display: grid;
  area: ${(props: Props) => props.area};
  grid-template-rows: [top-start] auto [top-end middle-start] auto [middle-end bottom-start] auto [bottom-end];
  grid-tempalte-columns: auto;
  background-color: ${(props: Props) => props.color};
  height: ${(props: Props) => props.height || '100vh'};
  grid-gap: 0.5em;
  width: 100%;
  padding: 0.5em;
`
const SubGridItem = atom.div`
  display: flex;
  justify-content: ${(props: Props) => props.justify};
  align-content: ${(props: Props) => props.align};
  background-color: #000;
  height: 100%;
  width: 100%;
  color: #FFF;
  font-family: Helvetica;
  padding: 0.5em;
`

const GridExample = () => (
  <Grid>
    <Box area='left-start' color='green'>
      <SubGridItem align='flex-start' justify='flex-end'><p>align: start, justify: end</p></SubGridItem>
      <SubGridItem align='center' justify='center'><p>align: center, justify: center</p></SubGridItem>
      <SubGridItem align='flex-end' justify='flex-start'><p>align:end, justify: start</p></SubGridItem>
    </Box>
    <Box area='right-start' color='blue'>
      <SubGridItem align='flex-start' justify='space-between'>
        <p>right top</p><p>align: start</p><p>justify: space-between</p>
      </SubGridItem>
      <SubGridItem align='center' justify='space-evenly'>
        <p>right middle</p><p>align: center</p><p>justify: space-evenly</p>
      </SubGridItem>
      <SubGridItem align='flex-end' justify='space-around'>
        <p>right bottom</p><p>align: end</p><p>justify: space-around</p>
      </SubGridItem>
    </Box>
  </Grid>
)

export default GridExample
