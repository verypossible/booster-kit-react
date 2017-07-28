import { findProvider, parseUserFromToken } from './index'

describe('(withAuth) AuthHelpers', () => {
  const configuredSocialProviders = ['github', 'google']
  const provider = (val) => findProvider(val, configuredSocialProviders)

  /**
   *  If you change the data structured returned from parseUserFromToken, generate a new token for testing
   *  Token Generator: https://jwt.io/
   */
  const idToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlckBleGFtcGxlLmNvbSIsImNvbXBhbnkiOiJFeGFtcGxlIENvbXBhbnkiLCJ1c2VyX2lkIjoiZ2l0aHVifDEyMzQ1IiwibmFtZSI6IkpvaG4gRG9lIiwicGljdHVyZSI6Imh0dHBzOi8vZXhhbXBsZS5jb20vbXlwaWN0dXJlbG9jYXRpb24ucG5nIiwiZXhwIjoxNTAxMjg1NDI2fQ.VY8-IOrJ6YEBoteGFA8G8H2dSRTfzKnzGdxiBnzI3Qs' // tslint:disable-line

  const hashWithToken = `#id_token=${idToken}&state=12345`
  const username = 'github|12345'
  const user = {
    avatar: 'https://example.com/mypicturelocation.png',
    email: 'tester@example.com',
    expiresAt: 1501285426,
    name: 'John Doe'
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
      .then((res) => expect(res).toEqual({ idToken, user, username }))
  })
})
