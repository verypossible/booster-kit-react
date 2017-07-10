import * as React from 'react'
import * as Icons from 'react-feather'

import atom from 'ui'

import { Logo, Trademark } from './Brand'

const styles = ({ color, status, theme }: Icon) => `
  color: ${
    (status && theme.status[status]) ||
    color ||
    '#000'
  }
`

const IconSet = {
  ...Icons,
  Logo,
  Trademark
}

const Icon: React.SFC<Icon> = ({ className, icon = 'Circle' }) => {
  const RenderIcon = IconSet[icon]
  return <RenderIcon className={className}/>
}

export default atom(Icon)`
  ${styles}
`
