import { validate } from 'lib'

const { createValidator, required, email } = validate

export default createValidator({
  email: [required, email]
})
