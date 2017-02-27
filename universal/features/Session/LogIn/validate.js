import { validate } from 'lib'

const { createValidator, required, email } = validate

const validateLogin = createValidator({
  email: [required, email],
  password: [required]
})

export default validateLogin
