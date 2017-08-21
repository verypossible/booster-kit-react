import * as React from 'react'

import { connectDocs } from '../module'
import { ConnectProps } from '../types'

import LinkBar from './LinkBar'

const PrimaryNav: React.SFC<ConnectProps> = ({ collectionsNav }) => (
  <LinkBar links={collectionsNav} nav />
)

const SectionNav: React.SFC<ConnectProps> = ({ collectionModulesNav }) => (
  <LinkBar links={collectionModulesNav} nav />
)

const enhance = connectDocs({ selector: 'collections' })

export const Collections = enhance(PrimaryNav)
export const Collection = enhance(SectionNav)
