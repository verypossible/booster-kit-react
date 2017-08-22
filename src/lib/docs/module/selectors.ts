import { createSelector, createStructuredSelector } from 'reselect'
import S from 'string'

import { DocsState, Selectors } from '../types'

import { KEY } from './index'
import parse from './parser'

const docsState = (state: DocsState) => state[KEY]
const routerMatch = (_, { match }) => match

/** Build dynamic navigation for collections and modules within a collection */
const collectionsNav = createSelector(
  [docsState, routerMatch],
  (state, match) => {
    return state.collections && state.collections.map(({ collection }) => ({
      id: `${KEY}-${collection}`,
      text: collection,
      to: `${match.path}/${collection}`
    }))
  }
)

const collectionModulesNav = createSelector(
  [docsState, routerMatch],
  (state, match) => {
    const active = match.params.collection
    const current = state.collections && state.collections.find(({ collection }) => collection === active)

    return current && current.modules.map(({ name }) => ({
      id: `${KEY}-${active}-${name}`,
      text: name,
      to: `${match.url}/${name}`
    }))
  }
)

/** Get active collection and module */
const activeCollection = createSelector(
  [docsState, routerMatch],
  (state, match) => state.collections && state.collections.find((c) => c.collection === match.params.collection)
)

const activeModule = createSelector(
  [activeCollection, routerMatch],
  (collection, match) => collection && collection.modules.find((m) => m.name === match.params.module)
)

/** Segment module parts by public vs. private */
const isPublic = (part, { params }) => (
  part.sources.some((s) => s.fileName.includes(`${params.collection}/${params.module}/index`)
  && (part.flags.isExported === true))
)

const publicModuleParts = createSelector(
  [activeModule, routerMatch],
  (module, match) => module && module.parts
    .filter((part) => isPublic(part, match))
    .map((part) => parse(part, module.parts))
)

const privateModuleParts = createSelector(
  [activeModule, routerMatch],
  (module, match) => module && module.parts
    .filter((part) => !isPublic(part, match))
    .map((part) => parse(part, module.parts))
)

/** Static Markdown Docs */
const staticDocsNav = createSelector(
  [docsState, routerMatch],
  (state, match) => {
    return state.markdown && state.markdown.map((directory) => ({
      id: directory.id,
      text: directory.title,
      to: `${match.path}/${directory.param}`
    }))
  }
)

const staticCollections = createSelector(
  [docsState, routerMatch],
  (state, match) => state.markdown && state.markdown.find((d) => d.param === match.params.static)
)

const staticCollectionNav = createSelector(
  [staticCollections, routerMatch],
  (collections, match) => collections && collections.files.map((collection) => ({
    id: collection.id,
    text: collection.title,
    to: `${match.url}/${collection.param}`
  }))
)

const activeStaticCollection = createSelector(
  [docsState, routerMatch],
  (state, match) => (
    state.markdown &&
    match.params.staticItem &&
    state.markdown.find((d) => d.param === match.params.staticItem)
  )
)

const staticCollectionItemNav = createSelector(
  [activeStaticCollection, routerMatch],
  (staticCollection, match) => staticCollection && staticCollection.files.map((item) => ({
    id: item.id,
    text: item.title,
    to: `${match.url}/${item.param}`
  }))
)

/** Root state selector */
const docs = createSelector(
  [docsState],
  (state) => state
)

/** Exported structured selectors */
const collections = createStructuredSelector<{}, {}, Selectors>({
  collectionModulesNav,
  collectionsNav,
  docs
})

const modules = createStructuredSelector({
  activeCollection,
  activeModule,
  privateModuleParts,
  publicModuleParts
})

const statics = createStructuredSelector({
  activeStaticCollection,
  staticCollectionNav,
  staticDocsNav
})

const selectors = { collections, modules, statics }

export default selectors
