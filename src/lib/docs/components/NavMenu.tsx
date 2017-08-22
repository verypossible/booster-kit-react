import * as React from 'react'

import { connectDocs } from '../module'
import { ConnectProps } from '../types'

import LinkBar from './LinkBar'

const primaryNav = [{
  id: 'docs-modules-entry',
  text: 'Modules',
  to: '/docs/modules'
}]

const selectCollections = connectDocs({ selector: 'collections' })
const selectStatics = connectDocs({ selector: 'statics' })

const Entry = ({ staticDocsNav }) => (
  <LinkBar links={[ ...primaryNav, ...staticDocsNav ]} nav />
)

const StaticCollectionNav = ({ staticCollectionNav }) => (
  <LinkBar links={staticCollectionNav} nav />
)

const StaticItemNav = ({ staticCollectionsNav }) => (
  <LinkBar links={staticCollectionsNav} nav />
)

const ModulesNav: React.SFC<ConnectProps> = ({ collectionsNav }) => (
  <LinkBar links={collectionsNav} nav />
)

const ModulesSectionNav: React.SFC<ConnectProps> = ({ collectionModulesNav }) => (
  <LinkBar links={collectionModulesNav} nav />
)

const Collections = selectCollections(ModulesNav)
const Collection = selectCollections(ModulesSectionNav)
const Primary = selectStatics(Entry)
const StaticItem = selectStatics(StaticItemNav)
const StaticCollection = selectStatics(StaticCollectionNav)

export { Collection, Collections, Primary, StaticItem, StaticCollection }
