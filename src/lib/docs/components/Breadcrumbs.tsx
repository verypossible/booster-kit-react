import * as React from 'react'
import * as S from 'string'
import styled from 'styled-components'

// import Anchor from './Anchor'
// import Icon from './Icon'

interface Props {
  className?: string,
  location: Location
}

const Crumb = styled.span`
  margin-right: 1em;
`

const MakeBreadcrumbs: React.SFC<Props> = ({ className, location }) => {
  const crumbs = S(location.pathname).splitRight('/')
  return (
    <div className={className}>
      {crumbs.map((c) => (
        <Crumb>
          {c}
        </Crumb>
      ))}
    </div>
  )
}

const Breadcrumbs = styled(MakeBreadcrumbs)`
  margin: 1em;
`

export default Breadcrumbs
