/* Actions */
declare type SessionActionHandlers = {
  payload?: ActiveSession
  type: 'session/START_SESSION' | 'session/CLEAR_SESSION'
}

declare interface SessionActions {
  startSession: (payload: ActiveSesion) => SessionActionHandlers
  clearSession: () => SessionActionHandlers
}

/* State */

/** ActiveSession model mirrors the server's User type */
declare interface ActiveSession extends SessionType {
  avatar?: string | null
  email?: string | null
  githubUsername?: string | null
  googleUsername?: string | null
  id: string
  name?: string | null
  username?: string
  createdAt?: string
  expiresAt?: number | null
  lastLogin?: string
  modifiedAt?: string
  token: string
  sessionType: string
}

declare type SessionPreloadedState = false

declare type Session = SessionPreloadedState | ActiveSession

declare interface SessionState {
  session: Session | SessionPreloadedState
}

/* Selectors */
declare interface GetSession {
  getSession: SelectState<Session>
}
