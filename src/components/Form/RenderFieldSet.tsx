import * as React from 'react'

import { FieldSet } from 'atoms/Form'
import FieldSelector from './FieldSelector'

const RenderFieldSet: React.SFC<FieldSetConfig> = ({ fields }) => (
  <FieldSet>
    {fields.map((input) => <FieldSelector key={input.name} {...input} />)}
  </FieldSet>
)

export default RenderFieldSet
