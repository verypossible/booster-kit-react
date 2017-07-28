import { mount } from 'enzyme'
import * as React from 'react'

import { mockProvider } from 'lib/test/mockApollo'
import MockProvider from 'lib/test/MockProvider'

import { authWithSocial, AuthWithSocial } from '../index'

// Bypassing auth0-js and returning the same location hash that would be returned at the specified callback URL
const idToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdhYmVAdmVyeXBvc3NpYmxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiR2FiZSBXZWF2ZXIiLCJnaXZlbl9uYW1lIjoiR2FiZSIsImZhbWlseV9uYW1lIjoiV2VhdmVyIiwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tT2Y4UFBaRjFSVEkvQUFBQUFBQUFBQUkvQUFBQUFBQUFBSWcvN1U3WDE4OXBZSGsvcGhvdG8uanBnIiwiZ2VuZGVyIjoibWFsZSIsImxvY2FsZSI6ImVuIiwiY2xpZW50SUQiOiJZc002cVJid3hEVWY5anlTanQ5dlhUempndnVSSUtFRCIsInVwZGF0ZWRfYXQiOiIyMDE3LTA3LTI0VDIwOjM2OjAzLjAyMloiLCJ1c2VyX2lkIjoiZ29vZ2xlLW9hdXRoMnwxMDE4NDg5NTUwMjgyMzU2NjgzNDkiLCJuaWNrbmFtZSI6ImdhYmUiLCJpZGVudGl0aWVzIjpbeyJwcm92aWRlciI6Imdvb2dsZS1vYXV0aDIiLCJ1c2VyX2lkIjoiMTAxODQ4OTU1MDI4MjM1NjY4MzQ5IiwiY29ubmVjdGlvbiI6Imdvb2dsZS1vYXV0aDIiLCJpc1NvY2lhbCI6dHJ1ZX1dLCJjcmVhdGVkX2F0IjoiMjAxNy0wNy0xOFQwNTozNzozMC40NjhaIiwiaXNzIjoiaHR0cHM6Ly92ZXJ5c2VydmljZXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAxODQ4OTU1MDI4MjM1NjY4MzQ5IiwiYXVkIjoiWXNNNnFSYnd4RFVmOWp5U2p0OXZYVHpqZ3Z1UklLRUQiLCJleHAiOjE1MDA5NjQ1NjMsImlhdCI6MTUwMDkyODU2Mywibm9uY2UiOiJTRjhqZk0zTTl4YWVIaURodnpKQjEtRVNnVUdFQzBMNiJ9.DV4EyGR-M70BAPvUKz-fsU8OKWF4XRQSRaW8EfZMkiY' // tslint:disable-line

/** Mocking the full location hash to verify the authHelpers are working down stream */
const hashWithToken = `#id_token=${idToken}&state=12345`

/** A test config that matches the same shape as the withAuth() HOC accepts. */
const config = {
  callbackPath: '/callback',
  configuredSocialProviders: ['google', 'github'],
  redirectOnError: '/login',
  redirectOnSuccess: '/profile'
}

/** Expected results once the token is decoded, the user is logged in, and the update mutation is successful. */
const userFromUpdate = {
  avatar: 'https://lh5.googleusercontent.com/-Of8PPZF1RTI/AAAAAAAAAAI/AAAAAAAAAIg/7U7X189pYHk/photo.jpg',
  email: 'gabe@verypossible.com',
  expiresAt: 1500966581,
  id: '12345',
  name: 'Gabe Weaver',
  username: 'gabe@verypossible.com'
}

/** Expected result from the loginWithAuth0() mutation is fired. */
const userFromLogin = {
  id: '12345',
  username: 'google-oauth2|101848955028235668349'
}

/** There is type enforcement in tests too :) */
interface WrappedComponentProps extends AuthWithSocial {
  callback: (data: object) => void
}

/** A simple test helper demonstrating the auth API is injected into a wrapped component */
class WrappedComponent extends React.Component<WrappedComponentProps, {}> {
  /** We are using this to test the result of the flow auth flow. Using a callback
   *  prevents Jest from completing the test before all the internal promises of
   *  withAuth() are completed.
   */
  public callback = () => {
    const locationState = this.props.location.state
    // We know from the HOC that both a success and failure result in the location state being set
    if (locationState && (locationState.user || locationState.error)) {
      this.props.callback(this.props.location)
    }
  }

  public render () {
    this.props.authenticate()
    this.callback()
    return (
      <div>
        <span>{this.props.error}</span>
      </div>
    )
  }
}

const ProviderAuth0WebWithHelpers = authWithSocial(config)(WrappedComponent)

/** You can pass both location information and mock results to the mockProvider.
 *  Read more about mocking router data - https://goo.gl/EkBMk6
 *  Read more about mocking apollo - https://goo.gl/LgpWBh and https://goo.gl/i4o2bX
 *
 *  Bonus: You can also path other static init options to the mockProvider() like state.
 *         Check out the file and the types the mockProvider accepts.
 */
const mockApolloProvider = ({ loginResult, updateResult }) => mockProvider({
  initLocation: [{
    hash: hashWithToken,
    pathname: '/callback'
  },
    '/login',
    '/profile'
  ],
  locationStart: 0,
  mocks: {
    Mutation: () => ({
      loginUserWithAuth0: () => ({
        user: () => loginResult
      }),
      updateUser: () => ({
        changedUser: () => updateResult
      })
    })
  }
})

describe('(withAuth) providerAuth0Web', () => {
  it('it exposes the social auth API via the injected props', () => {
    const wrapper = mount(
      <MockProvider>
        <ProviderAuth0WebWithHelpers />
      </MockProvider>
    )

    const apiKeys = [
      'authenticate', 'match', 'staticContext', 'session', 'history', 'location', 'errors', 'redirect'
    ]
    const targetProps = wrapper.find('WrappedComponent').props()

    expect(Object.keys(targetProps)).toEqual(apiKeys)
    expect(targetProps.error).toBeFalsy()
  })

  it('authenticates a new user when there is an id token in the location hash and redirects on success', (done) => {
    expect.assertions(2)
    const callback = (location) => {
      expect(location.pathname).toEqual(config.redirectOnSuccess)
      expect(location.state.user.username).toEqual(userFromUpdate.username)
      done()
    }

    const loginResult = userFromLogin
    const updateResult = userFromUpdate

    const ApolloProvider = mockApolloProvider({ loginResult, updateResult })

    const wrapper = mount(
      <ApolloProvider>
        <ProviderAuth0WebWithHelpers callback={callback} />
      </ApolloProvider>
    )

    return wrapper
  })

  it('deletes the user and redirects to failure location when there is an existing user', (done) => {
    expect.assertions(3)
    const callback = (location) => {
      expect(location.pathname).toEqual(config.redirectOnError)
      expect(location.pathname).not.toBe(config.redirectOnSuccess)
      expect(location.state.error).toContain(
        'There is an existing account linked to gabe@verypossible.com.'
      )
      done()
    }

    const loginResult = {
      user: userFromLogin
    }

    const updateResult = new Error(
      '401 Unauthed - failed uniqueness contraint (what Scaphold would return for duplicate users)'
    )

    const ApolloProvider = mockApolloProvider({ loginResult, updateResult })

    const wrapper = mount(
      <ApolloProvider>
        <ProviderAuth0WebWithHelpers callback={callback} />
      </ApolloProvider>
    )

    console.log(wrapper.debug())
    return wrapper
  })
})
