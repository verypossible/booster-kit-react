import module from 'modules/Counter/module'

const { actions, KEY } = module
const { increment, doubleAsync } = actions

describe('actions', () => {
  it('should create an action to increment the counter by one', () => {
    const expectedAction = {
      type: 'counter/COUNTER_INCREMENT',
      payload: 1
    }

    expect(increment()).toEqual(expectedAction)
  })
})
