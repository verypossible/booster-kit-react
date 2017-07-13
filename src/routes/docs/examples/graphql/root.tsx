import * as React from 'react'

import withData, { Queries } from 'hoc/withData'

const GraphqlHome: React.SFC<any> = ({ data }) => (
  <div>
    {data && data.viewer && data.viewer.allPages.edges.map((page) => page.node.id)}
  </div>
)

/*
  We're using the withData HOC and importing the Queries interface
    to assert the queries available to use.
*/
export default withData.query(
  (queries: Queries) => queries.getAllPages
)(GraphqlHome)
