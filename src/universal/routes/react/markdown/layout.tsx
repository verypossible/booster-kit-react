import * as React from 'react'

interface MarkdownLayoutProps {
  children: React.SFC<any>
}

const MarkdownLayout: React.SFC<MarkdownLayoutProps> = ({
  children
}) => (
  <div>
    {children}
  </div>
)

export default MarkdownLayout
