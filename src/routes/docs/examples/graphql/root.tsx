import * as React from 'react'
import { compose, graphql } from 'react-apollo'

// Queries are the typings and query is an object with all queries
import { query } from 'lib/graphql'
import { GetAllPagesQuery } from 'lib/graphql/schema'

// Declare props on the component
interface Props {
  pages: [{ node: { id: string, path: string }}]
}

// Stateless Functional Component To Render
const GraphqlHome: React.SFC<Props> = ({ pages }) => (
  <div>
    ids: {pages.map((page) => page.node.id)}
    paths: {pages.map((page) => page.node.path)}
  </div>
)
/*
  Use compose to curry higher order components and pass the props to the wrapped component

  Notice we are asserting the Query types and the Wrapped component prop types when we call
  graphql. This allows us to have strict type checking against the generated types from the schema
  and the defined types from the props.

  const options = {
    name: 'NewComponentName',
    skip: boolean | (props) => !props.ready,
    options: (props) => ({
      pollInterval: 2000,
      variables: { ... }
      ...all options - http://dev.apollodata.com/react/api-queries.html#graphql-query-options
    })
  }
  const query = graphql<QueryTypes, {}, WrapperPropTypes>(query, options)

  graphql accepts several arguments in the options
*/

const enhance = compose(
  graphql<GetAllPagesQuery, {}, Props>(query.GetAllPages, {
    props: ({ data }) => ({ pages: (data && data.viewer && data.viewer.allPages.edges) || [] })
  })
)

export default enhance(GraphqlHome)
