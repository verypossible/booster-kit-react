import * as React from 'react'

import { Box, Icon } from 'atoms'

const icons = {
  Apollo: ['black', '150%', 'Apollo'],
  Auth0: ['#F15509', '80%', 'Auth0'],
  CircleCi: ['#004B66', '80%', 'CircleCI'],
  Graphql: ['#E10098', '80%', 'GraphQL'],
  ReactIcon: ['#00D8FF', '80%', 'React'],
  Redux: ['#7748BC', '80%', 'Redux'],
  Scaphold: ['#1DAAA0', '70%', 'Scaphold'],
  TypeScriptIcon: ['#007ACC', '70%', 'TypeScript'],
  WebPck: ['black', null, 'Webpack']
}

const renderIcons = Object.entries(icons).map(([icon, [color, size]]) => (
  <Box
    key={icon}
    pad='xLarge'
    justify='center'
    align='center'
    alignContent='center'
    grid
  >
    <Icon icon={icon} color={color} size={size || '100%'}/>
  </Box>
))

export default renderIcons
