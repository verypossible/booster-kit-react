import nock from 'nock'

import { test, api } from 'lib'

import { types as SIGNUP, signUp } from './index'
import { KEY } from '../key'


const HOST = __SERVER_URL__
const { endpoints } = api
const postValues = {
  email: 'test@boosters.com',
  password: 'password',
  confirmPassword: 'password'
}

describe('(Module) session > signUp', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  /* Uncomment if you want to console log within the test:
  afterAll(done => {
    setTimeout(() => done(), 2000)
  */

  it('creates a new user account', () => {
    nock(HOST)
      .post('/registration', {
        ...postValues
      })
      .reply(201, {
        user: {
          id: 10,
          email: 'test@foresight.io'
        },
        jwt_token: '123456'
      })

    const expectedActions = [
      { type: SIGNUP.PENDING },
      { type: SIGNUP.SUCCESS,
          payload: {
            user: {
              id: 10,
              email: 'test@foresight.io'
            },
            jwt_token: '123456'
          }
      }
    ]
    const store = test.mockStore({})

    signUp(postValues, store.dispatch)
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('returns an error message when there is an existing user with the same email address', () => {
    nock(HOST)
      .post('/registration', {
        ...postValues
      })
      .replyWithError({
        errors: [{
          email: 'An account with this email address already exists.'
        }]
      })

    const expectedActions = [
      { type: SIGNUP.PENDING },
      { type: SIGNUP.SUCCESS,
        foo: [{
          foo: 'An account with this email address already exists.'
        }]
      }
    ]
    const store = test.mockStore({})

    signUp(postValues, store.dispatch)
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
