import q from 'lib/graphql/queries'
import mockGraphql from 'lib/test/mockGraphql'

describe('(Graphql) A mock query', () => {
  test('It returns data', () => {
    expect.assertions(1)
    const query = q.getAllPages
    console.log(mockGraphql(query))
    return (
      mockGraphql(query)
        .then((data) => {
          const pages = data.viewer.allPages.edges
          expect(pages.length).toBe(2)
        })
    )
  })
})
