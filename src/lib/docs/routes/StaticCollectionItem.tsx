import * as React from 'react'

const StaticCollectionItem = ({ match }) => (
  <div>
    {match.params.staticCollectionItem}
  </div>
)

export default StaticCollectionItem
