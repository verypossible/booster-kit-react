import * as React from 'react'

import { Box } from 'atoms'
import { Route } from 'lib/router'

import { DocsCollections } from '../types'

import DocsSection from './DocsSection'
import LinkBar from './LinkBar'

interface Props {
  collections: DocsCollections,
  match: Match
}

const DocsWrapper: React.SFC<Props> = ({ collections }) => {
  // const matchCollection = () => collections.find(({ collection }) => collection === view)
  //
  // const getModules = () => {
  //   const { modules } = matchCollection()
  //   const collectionModules = () => modules.map(({ name }) => ({
  //     id: `docs-${view}-${name}`,
  //     text: name,
  //     to: `/docs/${view}/${name}`
  //   }))
  //   return collectionModules()
  // }

  const primaryNav = () => collections.map(({ collection }) => ({
    id: `docs-${collection}`,
    text: collection,
    to: `/docs/${collection}`
  }))

  // const views = () => collections.map(({ collection }) => collection)

  return (
    <Box tag='section' display='grid' columns='15% 85%' rows='auto auto' height='100vh'>
      <Box column={[1, 1]} inverse height='100vh'>
        {collections && <LinkBar links={primaryNav()} />}
      </Box>
      <Box column={[2, 2]}>
        <Route path='/docs/:collection' component={DocsSection} />
      </Box>
    </Box>
  )
}

export default DocsWrapper
