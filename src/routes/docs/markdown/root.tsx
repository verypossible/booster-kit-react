import * as React from 'react'

import withData, { Queries } from 'hoc/withData'

// import Markdown from 'components/Markdown'

const MarkdownHome: React.SFC<any> = ({ data }) => (
  <div>
    {data && data.viewer && data.viewer.allPages.edges.map((page) => page.node.id)}
  </div>
)

export default withData.query(
  (queries: Queries) => queries.getAllPages
)(MarkdownHome)
