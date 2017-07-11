import { graphql } from 'react-apollo'

const queryHOC = (matchedQuery, config) => (WrappedComponent: React.SFC<any>) => graphql(matchedQuery, config)(WrappedComponent)

export default queryHOC
