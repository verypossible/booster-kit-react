import * as React from 'react'
import * as Icons from 'react-feather'
import styled from 'styled-components'

import config from '../config'

interface Props {
  className?: string
  color?: string,
  icon: string,
  margin?: string,
  padding?: string,
  size?: string
}

const IconSet = {
  ...Icons,
  ProjectLogo: config.logo
}

const GetIcon: React.SFC<Props> = ({ icon, className }) => {
  const RenderIcon = IconSet[icon]
  return (
    <RenderIcon className={className} />
  )
}

const sizes = {
  large: '4em',
  medium: '2.5em',
  small: '1.5em'
}

const Icon = styled(GetIcon)`
  display: block;
  margin: ${(props) => props.margin || '2em auto'};
  padding: ${(props) => props.padding || '0'};
  height: ${(props) => sizes[props.size] || sizes.small};
  color: ${(props) => props.color || 'white'};
`
export default Icon
