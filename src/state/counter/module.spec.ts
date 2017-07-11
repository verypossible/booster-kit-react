import { actions } from './module'

describe('(Module) counter', () => {
  describe('actions', () => {
    test('should create an action to increment the counter by one', () => {
      const expectedAction = {
        payload: 1,
        type: 'counter/COUNTER_INCREMENT'
      }

      expect(actions.increment(1)).toEqual(expectedAction)
    })
  })
})
