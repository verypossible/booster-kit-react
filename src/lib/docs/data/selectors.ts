import { createSelector, createStructuredSelector } from 'reselect'

import config from '../config'
import { DocsState } from '../types'

import parse from './parser'
import { KEY } from './state'

/**
 * Base selectors that all selectors subscribe to
 *
 */

/** Selects the docs state from the state tree */
const docsState = (state: DocsState) => state[KEY]

/** Selects the `match` prop from the router */
const routerMatch = (_, { match }) => match

/** Selects which state object to pass to subscribed selectors based on current route params */
const selectState = createSelector(
  [docsState, routerMatch],
  (state, match) => {
    switch (true) {
      case match.params.collection === 'modules':
        return state.modules

      case match.params.collection !== 'modules':
        return state.markdown

      default:
        return null
    }
  }
)

/**
 * Active Route Data Selectors
 *
 * Route heiracry - /docs/:collection/:part/:item/:subItem
 *
 */

 /** Match helper for finding a state object based on a route param */
const findActive = (state, active) =>
  state && active && state.find(({ name }) => name === active)

/** Selects the active collection based on the route's `collection` param */
const activeCollection = createSelector(
  [selectState, routerMatch],
  (state, match) =>
    state && findActive(state, match.params.collection)
)

/** Selects the active part from the active collection based on the route's `part` param */
const activePart = createSelector(
  [activeCollection, routerMatch],
  (collection, match) =>
    collection && findActive(collection.children, match.params.part)
)

/** Selects the active item from the active part based on the route's `item` param */
const activeItem = createSelector(
  [activePart, routerMatch],
  (part, match) =>
    part && findActive(part.children, match.params.item)
)

/** Selects the active subItem from the active item based on the route's `subItem` param */
const activeSubItem = createSelector(
  [activeItem, routerMatch],
  (current, match) =>
    current && findActive(current.children, match.params.subItem)
)

/**
 * Navigation Selectors
 */
const navItem = (parent: string, data: any, path?: string) => ({
  id: `${KEY}-${parent}-${data.name}`,
  text: data.title || data.name,
  to: `${config.basePath}/${path}`
})

/** Creates a list of collections nav from modules state */
const modulesNav = createSelector(
  [docsState],
  state =>
    state.modules && state.modules.map(data => navItem('collection', data, data.name))
)

/** Creates nav items collections from markdown state */
const markdownNav = createSelector(
  [docsState],
  state =>
    state.markdown && state.markdown.map(data => navItem('collection', data, data.name))
)

/** Creates a unified collections nav from modules and markdown */
const collectionsNav = createSelector(
  [markdownNav, modulesNav],
  (markdown, modules) =>
    markdown && modules && [...markdown, ...modules]
)

/** Creates a list of nav items for all parts within an active collection */
const partsNav = createSelector(
  [activeCollection, collectionsNav, routerMatch],
  (collection, collectionNav, match) => (
    collection &&
    collection.children ?
    collection.children.map(
      data => navItem(match.params.collection, data, `${match.params.collection}/${data.name}`)
    ) : collectionNav
  )
)

/** Creates a list of nav items for all items within an active part */
const itemsNav = createSelector(
  [activePart, routerMatch],
  (part, match) =>
    part && part.children.map(
      data =>
        navItem(match.params.part, data, `${match.params.collection}/${match.params.part}/${data.name}`)
    )
)

/**
 * Sub Item selectors
 *
 */
const isPublic = subItem => subItem.flags && subItem.flags.isExported === true
const isModule = ({ params }) => params.collection === 'modules'

const publicSubItems = createSelector(
  [activeItem, routerMatch],
  (current, match) => isModule(match) && current && current.children
    .filter(subItem => isPublic(subItem))
    .map(subItem => parse(subItem, current.children))
)

const privateSubItems = createSelector(
  [activeItem, routerMatch],
  (current, match) => isModule(match) && current && current.children
    .filter(subItem => !isPublic(subItem))
    .map(subItem => parse(subItem, current.children))
)

/** Root state selector */
const docsSelectors = createSelector(
  [docsState],
  state => state
)

/**
 *  Public Selectors
 */
const nav = createStructuredSelector({
  collections: collectionsNav,
  items: itemsNav,
  parts: partsNav
})

const docs = createStructuredSelector({
  docs: docsSelectors,
  nav
})

const item = createStructuredSelector({
  activeItem,
  privateSubItems,
  publicSubItems
})

const selectors = {
  activeCollection,
  activeItem,
  activePart,
  activeSubItem,
  docs,
  item
}

export default selectors
