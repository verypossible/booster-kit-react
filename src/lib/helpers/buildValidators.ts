import { createValidator, email, required } from './validate'

/* We map over the inputs (children) to build dynamic form validation */
function buildFormValidators (children) {
  const validateInputs = {}
  children.map(input => {
    const { name, type, optional } = input.props
    const validators = []
    if (!optional && type === 'email') {
      validators.push(email)
    }

    if (!optional) {
      validators.push(required)
      return Object.assign(validateInputs, { [name]: validators })
    }
    return false
  })
  const validate = createValidator(validateInputs)
  return validate
}

export default buildFormValidators
