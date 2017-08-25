import * as React from 'react'

import { ParsedType } from '../../types'

import { H3 } from '../Headers'
import Tag from '../Tag'
import TypeIcon from '../TypeIcon'

import GridArea from './GridArea'

const Title: React.SFC<ParsedType> = ({ flags, name, type }) => (
  <GridArea area='headerLeft'>
    <H3 margin='0'>
      <TypeIcon dataIcon={type} />
      {name}
      <Tag exported={flags.isExported}>{flags.isExported ? 'exported' : 'private'}</Tag>
    </H3>
  </GridArea>
)

export default Title
