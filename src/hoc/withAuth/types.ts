import * as Schema from 'lib/graphql/schema'
import { Dispatch } from 'lib/types'

// ------------------------------------
// Static Config
// ------------------------------------
export interface Auth0Config {
  clientID: string,
  domain: string,
  redirectUri: string,
  responseType: string,
  scope: string
}

export interface PublicAuthConfig {
  callbackPath?: string,
  redirectOnError?: string,
  redirectOnSuccess?: string,
}

export interface AuthConfig extends PublicAuthConfig {
  auth0Config?: Auth0Config,
  configuredSocialProviders?: string[]
}

// ------------------------------------
// Router & Connect Props
// ------------------------------------
export interface WithRouter {
  history?: RouterHistory,
  location?: RouterLocation,
  match?: RouterMatch
}

interface AuthState {
  session: Session,
  storeSession?: (payload: ActiveSession) => Dispatch<SessionActions>,
}

// ------------------------------------
// Data
// ------------------------------------
/** A generic for graphql queries */
type AuthResponse<I, R> = (input: I) => Promise<{data: R}>

interface CommonAuthData {
  updateUser?: AuthResponse<Schema.UpdateUserInput, Schema.UpdateUserMutation>
}

interface ServerAuthData extends CommonAuthData {
  createUser?: AuthResponse<Schema.CreateUserInput, Schema.CreateUserMutation>,
  forgotPassword?: AuthResponse<Schema.ChangeUserPasswordInput, Schema.ForgotPasswordMutation>,
  loginUser?: AuthResponse<Schema.LoginUserInput, Schema.LoginUserMutation>,

}

interface LoginSocialUser {
  loginSocialUser?: AuthResponse<Schema.LoginUserWithAuth0Input, Schema.LoginWithAuth0Mutation>
}

interface SocialAuthData extends CommonAuthData, LoginSocialUser {
  deleteUser?: AuthResponse<Schema.DeleteUserInput, Schema.DeleteUserMutation>
}

// ------------------------------------
// Auth Helpers
// ------------------------------------
type Provider = {
  [key: string]: string
}

type AuthError = boolean | string

/** The user object retrieved from decoding the JWT token in location.hash */
export interface UserFromToken {
  idToken: string,
  user: {
    avatar: string,
    email: string,
    expiresAt: number,
    name: string
  },
  username: string
}

export interface AuthErrors {
  failedLogin: (data?: object) => string,
  failedSignup: (data?: object) => string,
  failedUpdate: (data: { email: string }) => string,
  tokenExpired: (data?: object) => string
}

interface PublicAuthHelpers {
  error?: AuthError,
  errors?: AuthErrors,
  redirect?: ({ pathname, state }: { pathname: string, state: object }) => void
}

interface AllAuthHelpers extends PublicAuthHelpers {
  getProvider?: (val: string | object, nameOnly?: boolean) => Provider,
  handleLoginFailure?: (error: object) => void,
  logError?: (err: { reason: string, error: object }) => void,
  purgeSession?: () => void,
  shouldProcessAuth?: boolean,
  getUserFromToken?: () => Promise<UserFromToken>
}

export interface AuthHelpers  {
  authHelpers: AllAuthHelpers
}

export interface AuthSocialResult {
  error?: AuthError,
  user?: Schema.UpdateUserInput
}

// ------------------------------------
// Injected Props On Last composed HOC
// ------------------------------------
export type CommonProps = AuthState & WithRouter & AuthHelpers

export type AuthSocialProps = CommonProps & SocialAuthData
export type AuthServerProps = CommonProps & ServerAuthData
export type VerifySocialSessionProps = CommonProps & LoginSocialUser

// ------------------------------------
// Public Social API
// ------------------------------------
export interface AuthWithSocial extends WithRouter, PublicAuthHelpers {
  authenticate: () => void,
  session: Session
}

export interface LogoutWithSocial {
  logoutSocial: () => void
}

export interface AuthSocialProvider {
  error: AuthError,
  authProvider: (connection?: 'google-oauth2' | 'github') => void,
}

export interface VerifySocialSession  {
  verifySocialSession: (idToken: string) => Promise<void | ActiveSession>
}

// ------------------------------------
// Public Scaphold API
// ------------------------------------
export interface AuthWithServer extends
  WithRouter,
  CommonAuthData,
  PublicAuthHelpers,
  PublicAuthConfig {
  createAccount: (input: Schema.CreateUserInput) => Promise<{ token: string, username: string, id: string }>,
  errors: AuthErrors,
  login: (input: Schema.LoginUserInput) => Promise<{ token: string }>,
  logout: () => void,
  session: Session
}
