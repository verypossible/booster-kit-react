import * as React from 'react'

interface Props {
  match: RouterMatch
}

const DocsSection = ({ match }) => (
  <div>hi {match.params.collection}</div>
)

export default DocsSection
