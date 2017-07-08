import { actions } from './module'

describe('(Module) counter', () => {
  describe('actions', () => {
    test('should create an action to increment the counter by one', () => {
      const expectedAction = {
        type: 'counter/COUNTER_INCREMENT',
        payload: 1
      }

      expect(actions.increment(1)).toEqual(expectedAction)
    })
  })
})
