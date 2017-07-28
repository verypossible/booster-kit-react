declare interface AuthForm {
  email: string,
  password: string,
  confirmPassword?: string
}

declare interface AuthFormError {
  _error: string
}

declare type AuthSuccess = ({ pathname, state }: { pathname: string, state: object }) => ReplaceHistory
