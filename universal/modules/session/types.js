/* @flow */
export type User = {
  id: string,
  email: string
}

export type Session = {
  user: User,
  isFetching: boolean,
  isAuthed: boolean,
  errors?: Array<string>
}

export type State = Session
