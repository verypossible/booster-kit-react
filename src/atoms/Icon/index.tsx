import * as React from 'react'
import * as Icons from 'react-feather'

import atom from 'ui'

import { Logo, Trademark } from './Brand'
import Vendor from './Vendor'

const styles = ({ color, size, status, theme }: Icon) => `
  color: ${
    (status && theme.status[status]) ||
    color ||
    '#000'
  };
  width: ${theme.icons.size[size]}
`

const IconSet = {
  ...Icons,
  ...Vendor,
  Logo,
  Trademark
}

const GetIcon: React.SFC<Icon> = ({ className, icon = 'Circle' }) => {
  const RenderIcon = IconSet[icon]
  return <RenderIcon className={className}/>
}

const Icon = atom(GetIcon)`
  ${styles}
`
export default Icon
