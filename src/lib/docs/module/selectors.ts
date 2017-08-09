import { createSelector, createStructuredSelector } from 'reselect'

import { DocsState } from '../types'

import { KEY } from './index'

const docsState = (state: DocsState) => state[KEY]
const docsCollections = (state: DocsState) => state[KEY].collections
const routerMatch = (_, { match }) => match

const collectionsNav = createSelector(
  [docsCollections, routerMatch],
  (collections, match) => collections && collections.map(({ collection }) => ({
    id: `${KEY}-${collection}`,
    text: collection,
    to: `${match.path}/${collection}`
  }))
)

const collectionModulesNav = createSelector(
  [docsCollections, routerMatch],
  (collections, match) => {
    const active = match.params.collection
    const current = collections && collections.find(({ collection }) => collection === active)
    return current && current.modules.map(({ name }) => ({
      id: `${KEY}-${active}-${name}`,
      text: name,
      to: `${match.path}/${active}/${name}`
    }))
  }
)

const docs = createSelector(
  [docsState],
  (state) => state
)

const docsSelectors = createStructuredSelector({
  collectionModulesNav,
  collectionsNav,
  docs
})

export default docsSelectors
