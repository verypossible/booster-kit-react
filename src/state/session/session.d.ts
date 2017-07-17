/* Actions */
declare type SessionActionHandlers = {
  payload?: ActiveSession,
  type: 'session/START_SESSION' | 'session/CLEAR_SESSION' | 'session/SESSION_ERROR'
}

declare interface SessionActions {
  sessionError: (payload: SessionError) => SessionActionHandlers,
  startSession: (payload: ActiveSesion) => SessionActionHandlers,
  clearSession: () => SessionActionHandlers
}

/* State */
declare interface SessionError {
  error?: object
}

declare interface ActiveSession extends SessionError {
  email: string,
  expiresAt: number,
  idToken: string,
  name: string,
  picture: string
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
