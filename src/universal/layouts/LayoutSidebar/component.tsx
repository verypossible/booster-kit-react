import * as React from 'react'

import NavBar from 'components/NavBar'

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
}) => {
  return (
    <div className='container'>
      <div className='left'>
        <NavBar navItems={navItems} />
      </div>
      <div className='right'>
        {children}
      </div>
    </div>
  )
}

export default Layout
