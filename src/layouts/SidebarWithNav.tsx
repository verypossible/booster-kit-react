import * as React from 'react'

import GridItem from 'atoms/GridItem'
import NavBar from 'components/NavBar'

import TwoColumn from './TwoColumn'

interface LayoutSidebarProps {
  children?: any
  navItems?: NavItem[]
}

const defaultNavItems = [{
  className: 'link',
  id: 'counterLink',
  text: 'Counter',
  to: '/react/counter'
}, {
  className: 'link',
  id: 'markdownLink',
  text: 'Markdown',
  to: '/react/markdown'
}]

const Layout: React.SFC<LayoutSidebarProps> = ({
  children,
  navItems = defaultNavItems
}) => (
  <TwoColumn leftWidth={25}>
    <GridItem column={[1, 1]} inverse={true}>
      <NavBar navItems={navItems} />
    </GridItem>
    <GridItem column={[2, 2]}>
      {children}
    </GridItem>
  </TwoColumn>

)

export default Layout
