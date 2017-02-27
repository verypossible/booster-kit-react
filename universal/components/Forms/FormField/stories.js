import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import FormField from './component'

const props = {
  input: {},
  meta: {},
  label: 'Field Label',
  type: 'text',
  placeholder: 'Field Placeholder'
}

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={'This story demonstrates the props that can be passed to <Button />'}>
        <FormField
          label={text('Label', props.label)}
          type='text'
          placeholder={text('Placeholder', props.placeholder)}
        />
      </WithNotes>
    )
  })
