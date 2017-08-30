import * as React from 'react'

import { Anchor, Box, Icon } from 'atoms'

const icons = {
  Apollo: ['black', '150%', 'http://dev.apollodata.com/react/'],
  CircleCi: ['#004B66', '80%', 'https://circleci.com/'],
  Graphql: ['#E10098', '80%', 'http://graphql.org/'],
  ReactIcon: ['#00D8FF', '80%', 'https://facebook.github.io/react/'],
  Redux: ['#7748BC', '80%', 'http://redux.js.org/'],
  Scaphold: ['#1DAAA0', '70%', 'https://scaphold.io/'],
  TypeScriptIcon: ['#007ACC', '70%', 'https://www.typescriptlang.org/'],
  WebPck: ['black', '100%', 'https://webpack.js.org/']
}

const renderIcons = Object.entries(icons).map(([icon, [color, width, to]]) => (
  <Box key={icon} pad='xLarge' justify='center' align='center'>
    <Anchor to={to}>
       <Icon icon={icon} color={color} width={width} />
    </Anchor>
  </Box>
))

export default renderIcons
