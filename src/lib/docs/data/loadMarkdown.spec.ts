import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { actionTypes } from '../data/state'

import { getStaticDocs } from './loadMarkdown'

const middlewares = [
  thunk
]
const mockStore = configureStore(middlewares)

type Request = any

const mockFileReq = files => {
  const req = key => files[key]
  return { req, keys: () => Object.keys(files) }
}

const mdFiles = {
  './tutorials.md': {
    default: 'tutorial markdown'
  },
  './tutorials/00-Getting-Started.md': {
    default: 'getting started markdown'
  }
}

const expectedResults = [{
  children: [{
    content: 'getting started markdown',
    id: '#docs-/tutorials/getting-started',
    name: 'getting-started',
    path: '/tutorials/getting-started',
    title: 'Getting Started'
  }],
  content: 'tutorial markdown',
  id: '#docs-/tutorials',
  name: 'tutorials',
  path: '/tutorials',
  title: 'Tutorials'
}]

describe('Docs > data > loadMarkdown', () => {
  test.skip('Parses markdown from the loaded context', () => {
    const store = mockStore({})
    const mockRequest = mockFileReq(mdFiles).req as Request
    const subscribe = f => {
      mockRequest.keys.map(key => {
        const module = mockRequest(key).req
        f(key, module.default, false)
      })
    }

    store.dispatch(getStaticDocs(subscribe))
    expect(store.getActions()).toEqual([{
      payload: expectedResults, type: actionTypes.LOAD_MARKDOWN
    }])
  })
})
