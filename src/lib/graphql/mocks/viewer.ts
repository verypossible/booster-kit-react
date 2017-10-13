import * as faker from 'faker'
import { MockList } from 'graphql-tools'
import * as S from 'string'

const mockPages = () => {
  const id = faker.random.alphaNumeric(15)
  const words = c => faker.random.words(c)
  const slug = c => S(words(c)).slugify().s
  return {
    node: {
      __typename: 'PageEdge',
      id,
      path: `/${slug(1)}/${slug(2)}/${slug(3)}`
    }
  }
}

export default {
  viewer: () => ({
    __typename: 'Viewer',
    allPages: () => ({
      __typename: 'PageConnection',
      edges: () => new MockList([2, 12], mockPages)
    })
  })
}
