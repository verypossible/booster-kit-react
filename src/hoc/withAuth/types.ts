import * as Schema from 'lib/graphql/schema'
import { Dispatch } from 'lib/types'

/* Config */
type AuthStrategy = 'social' | 'scaphold' | 'all'

export interface Auth0Config {
  clientID: string,
  domain: string,
  redirectUri: string,
  responseType: string,
  scope: string
}

export interface AuthErrors {
  failedLogin: (params?: object) => string,
  failedUpdate: (params: { email: string }) => string
}

export interface AuthSetup {
  callbackPath?: string,
  redirectOnError?: string,
  redirectOnSuccess?: string,
  strategy?: AuthStrategy
}

export interface AuthConfig extends AuthSetup {
  auth0Config?: Auth0Config,
  errors?: AuthErrors,
  configuredSocialProviders?: string[]
}

/* Handlers */
export interface AuthRouter {
  history?: RouterHistory,
  location?: RouterLocation,
  match?: RouterMatch
}

export interface AuthState {
  session?: Session,
  startSession?: (payload: ActiveSession) => Dispatch<SessionActions>,
}

type AuthResponse<I, R> = (input: I) => Promise<{data: R}>

export interface InitialProps extends AuthState, AuthRouter {
  deleteUser: AuthResponse<Schema.DeleteUserInput, Schema.DeleteUserMutation>
  loginSocialUser: AuthResponse<Schema.LoginUserWithAuth0Input, Schema.LoginWithAuth0Mutation>,
  updateUser: AuthResponse<Schema.UpdateUserInput, Schema.UpdateUserMutation>
}

type Provider = {
  [key: string]: string
}

type AuthError = boolean | string

export interface UserFromToken {
  /** The token parsed from the location.hash. This is used to make subsequent authenticated requests
   *  to the GraphQL server via Apollo Client
   */
  idToken: string,

  /** The user object retrieved from decoding the JWT token in location.hash */
  userFromToken: {
    user_id: string,
    picture: string,
    email: string,
    exp: number,
    name: string
  }
}

export interface AuthHelpers {
  /** Error returned from location state and passed down as a prop to the wrapped component */
  error: AuthError,

  /** Parses the provider name from the userFromToken */
  getProvider: (val: string | object, nameOnly?: boolean) => Provider,

  /** Generic error logger that reports errors to rollbar */
  logError: (err: { reason: string, error: object }) => void,

  /** Purging the session will clear local storage and redirect the user */
  purgeSession: () => void,

  /** An interface for using history.replace(pathname, state) */
  redirect: ({ pathname, state }: { pathname: string, state: object }) => void,

  /** Tests the location.pathname against a regex that checks for hash keys used in auth callbacks */
  shouldProcessAuth: boolean,

  /* Parses a JWT token from the location.hash and decodes it */
  getUserFromToken: () => Promise<UserFromToken>
}

export type WithAllProps = InitialProps & AuthHelpers

export interface AuthResult {
  /** If the promise chain fails, the error that was returned during the async auth flow */
  error?: AuthError,

  /** If the auth promise chain succeeds, the user returned from the server's updateUser mutation */
  user?: Schema.UpdateUserInput
}

/* API */
export interface AuthSocialAPI extends AuthRouter {
  authenticate: () => void,
  error: AuthError,
  loginSocial: (connection?: 'google-oauth2' | 'github') => void,
  logoutSocial: () => void
}
