declare interface NavItem {
  id?: string
  to?: string
  className?: string
  text?: string
}

declare interface NavBar {
  navItems: NavItem[]
}
