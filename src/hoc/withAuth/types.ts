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
  failedUpdate: (params: { email: string, providerName: string }) => string
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
export interface InitialAuthProps {
  session: Session,
  dispatch: Dispatch<Actions>,
  clearSession: () => Dispatch<SessionActions>,
  startSession: (payload: ActiveSession) => Dispatch<SessionActions>,
  history: RouterHistory,
  location: RouterLocation
}

export interface AuthData extends InitialAuthProps {
  deleteUser: (input: Schema.DeleteUserInput) => Promise<Schema.DeleteUserMutation>
  loginSocialUser: (input: Schema.LoginUserWithAuth0Input) => Promise<Schema.LoginWithAuth0Mutation>,
  updateUser: (input: Schema.UpdateUserInput) => Promise<Schema.UpdateUserMutation>
}

type Provider = {
  [key: string]: string,
  provider?: string
}

type AuthError = boolean | string

export interface AuthHelpers extends AuthData {
  error: AuthError,
  getProvider: (val: string, nameOnly?: boolean) => Provider,
  hash: string,
  logError: (err: { reason: string, error: object }) => void,
  purgeSession: () => Dispatch<any>,
  redirect: (opts: { pathname: string, state: object }) => ReplaceHistory,
  shouldProcessAuth: boolean
}

export type UserFromToken = {
  user_id: string,
  picture: string,
  email: string
} | {}

export interface AuthSocial extends AuthHelpers {
  userFromToken: UserFromToken
}

/* API */
export interface AuthSocialAPI {
  authenticate: () => void,
  error: AuthError,
  location: RouterLocation,
  history: RouterHistory,
  match: RouterMatch,
  loginSocial: (connection?: 'google-oauth2' | 'github') => void,
  logoutSocial: () => void
}
