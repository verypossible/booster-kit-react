import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { decorateAction } from '@kadira/storybook-addon-actions'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import { Button } from './component'

const handleClick = 'Click has been handled'

const props = {
  disabled: false,
  linkTo: '/',
  color: 'dark',
  label: 'Button Story'
}

const exampleAction = decorateAction([
  args => args.slice(0, 1)
])

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={'This story demonstrates the props that can be passed to <Button />'}>
        <Button
          disabled={boolean('Disabled', props.disabled)}
          linkTo={text('Target', props.linkTo)}
          color={text('Color', props.color)}
          handleClick={exampleAction(handleClick)}
        >
          {text('Label', props.label)}
        </Button>
      </WithNotes>
    )
  })
