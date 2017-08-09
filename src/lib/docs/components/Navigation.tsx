import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { connectDocs } from '../module'
import { ConnectProps } from '../types'

import LinkBar from './LinkBar'

const PrimaryNav: React.SFC<ConnectProps> = ({ collectionsNav }) => (
  <LinkBar links={collectionsNav} nav />
)

const SectionNav: React.SFC<ConnectProps> = ({ collectionModulesNav }) => (
  <LinkBar links={collectionModulesNav} nav />
)

const Collections = connectDocs(PrimaryNav)
const Collection = connectDocs(SectionNav)

export {
  Collections,
  Collection
}
