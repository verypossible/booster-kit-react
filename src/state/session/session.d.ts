/* Actions */
declare type SessionActionHandlers = {
  payload?: ActiveSession,
  type: 'session/START_SESSION' | 'session/CLEAR_SESSION'
}

declare interface SessionActions {
  startSession: (payload: ActiveSesion) => SessionActionHandlers,
  clearSession: () => SessionActionHandlers
}

/* State */
declare interface ActiveSession {
  accessToken: string,
  email: string,
  expiresAt: string,
  idToken: string,
  name: string
}

declare type SessionPreloadedState = false

declare type Session = SessionPreloadedState | ActiveSession

declare interface SessionState {
  session: Session | SessionPreloadedState
}

/* Selectors */
declare interface GetSession {
  getSession: SelectState<Session>,
}

declare interface SessionExpired {
  sessionExpired: SelectState<Session>
}
