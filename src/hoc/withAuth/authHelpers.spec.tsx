import { findProvider, parseUserFromToken } from './authHelpers'

describe('(withAuth) AuthHelpers', () => {
  const configuredSocialProviders = ['github', 'google']
  const provider = (val) => findProvider(val, configuredSocialProviders)
  const idToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBleGFtcGxlLmNvbSIsImNvbXBhbnkiOiJFeGFtcGxlIENvbXBhbnkiLCJ1c2VybmFtZSI6ImdpdGh1YnwxMjM0NSJ9._14kU0NjFSzNHCFitS8wHMzmm0r3y8' // tslint:disable-line

  const hashWithToken = `#id_token=${idToken}&state=12345`

  const userFromToken = {
    company: 'Example Company',
    email: 'tester@example.com',
    username: 'github|12345'
  }

  it('findProvider returns the correct social provider from the userFromToken username', () => {
    const githubUsername = 'github|1234'
    const googleUsername = 'google-auth2|1234'

    expect(provider(githubUsername)).toEqual({ githubUsername })
    expect(provider(googleUsername)).toEqual({ googleUsername })
  })

  it('parseUserFromToken promise decodes the jwt decode and returns a userFromToken object', () => {
    expect.assertions(1)
    return parseUserFromToken(hashWithToken)
      .then((res) => expect(res).toEqual({ idToken, userFromToken }))
  })
})
