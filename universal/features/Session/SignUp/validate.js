import { validate } from 'lib'

const { match, createValidator, required, email, minLength } = validate
const validateSignup = createValidator({
  email: [required, email],
  password: [required, minLength(6)],
  confirmPassword: match('password', "Passwords don't match")
})

export default validateSignup
