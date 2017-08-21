import * as React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import { LinkBar } from '../components'
import { H1, H2 } from '../components/Headers'
import ItemDetail, { ModuleUsage } from '../components/Module'
import { connectDocs } from '../module'
import { ConnectProps } from '../types'

const moduleNav = (url) => [{
  id: `${url}-root`,
  text: 'Usage',
  to: `${url}`
}, {
  id: `${url}-internals`,
  text: 'Internals',
  to: `${url}/internals`
}]

const Wrapper = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 33% 34% 33%;
  grid-template-rows: 75px auto auto;
  grid-template-areas:
    "headerLeft headerMiddle headerRight"
    "module module module";
  align-items: center;
`

const Content = styled.div`
  grid-area: module;
`
const ModuleWrapper: React.SFC<ConnectProps> = ({
  activeModule,
  match: { url, params },
  publicModuleParts,
  privateModuleParts
}) => {
  return (
    <Wrapper>
      <H1 gridArea='headerLeft'>{activeModule.name}</H1>
      <LinkBar color='black' gridArea='headerMiddle' inline links={moduleNav(url)} nav/>
      <Content>
        <Route
          exact
          path={`${url}`}
          render={() => (
            <div>
              <H2>Usage</H2>
              {publicModuleParts && publicModuleParts.map((part) => {
                return <ModuleUsage key={part.name} importLoc={`${params.collection}/${params.module}`} {...part} />
              })}
            </div>
          )}
        />
        <Route
          exact
          path={`${url}/internals`}
          render={() => (
            <div>
              <H2>Internals</H2>
              {privateModuleParts && privateModuleParts.map((part) => {
                return <ItemDetail key={part.name} {...part} />
              })}
            </div>
          )}
        />
      </Content>
    </Wrapper>
  )
}

export default connectDocs({ selector: 'modules' })(ModuleWrapper)
