import reducer, { preloadedState } from 'redux/modules/<%= pascalEntityName %>'

describe('(Redux) <%= pascalEntityName %>', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(preloadedState)
    })
  })
})
