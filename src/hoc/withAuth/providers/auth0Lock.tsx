// import Auth0Lock from 'auth0-lock'
// import * as React from 'react'
//
// import logger from 'lib/logger'
//
// const cid = __AUTH_CID__
// const url = __AUTH_URL__
//
// const scope = 'openid profile'
//
// /*
//   Documentation for using the Auth0 SDK for Web:
//     https://auth0.com/docs/libraries/lock/v10
//
//   Use this strategy if you don't care about controlling the user experience
//   and you don't have a lot of additional fields to collect during registration.
// */
// const managedAuth = (config) => {
//
//   /*
//     A full list of Lock options params can be found here:
//     https://auth0.com/docs/libraries/lock/v10/customization#params-object-
//   */
//   const defaultOptions = {
//     allowedConnections: ['google-oauth2'],
//     auth: {
//       params: {
//         scope
//       },
//       responseType: 'token'
//     },
//     languageDictionary: {
//       emailInputPlaceholder: 'example@youremail.com',
//       title: 'Log In'
//     },
//     rememberLastLogin: true
//   }
//
//   const options = Object.assign({}, defaultOptions, config)
//   const lock = new Auth0Lock(cid, url, options)
//
//   return {
//     authenticated: () => new Promise((resolve, reject) => {
//       lock.on('authenticated', (authResult) => {
//         lock.getUserInfo(authResult.accessToken, (error, profile) => {
//           return error ? reject(error) : resolve({
//             idToken: authResult.accessToken,
//             profile: JSON.stringify(profile)
//           })
//         })
//       })
//     }),
//     show: () => lock.show()
//   }
// }
