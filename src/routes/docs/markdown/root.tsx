import * as React from 'react'

import withData from 'hoc/withData'

// import Markdown from 'components/Markdown'

const MarkdownHome: React.SFC<any> = (props) => (
  <div>
    {console.log(props)}
  </div>
)

export default withData.query(
  (queries) => queries.getAllPages
)(MarkdownHome)
