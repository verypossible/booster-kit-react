import { Dispatch } from 'lib/types'

export interface Auth0Web {
  scope?: string,
  responseMode?: string,
  responseType?: string,
  session: Session,
  sessionError: (error: object) => Dispatch<SessionActions>,
  startSession: (session: ActiveSession) => Dispatch<SessionActions>,
  clearSession: () => Dispatch<SessionActions>,
  location: {
    hash?: string
  },
  loginUser: (idToken: string) => void,
  history: {
    replace: (params: {
      pathname: string,
      state?: object
    }) => void
  }
}
