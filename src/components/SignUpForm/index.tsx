import withAuth from 'hoc/withAuth'
import withForm from 'hoc/withForm'
import { compose } from 'lib/helpers'

import SignUpForm from './component'

// function handleSubmit (values, null) {
//   console.log(values, 'IN ON SUBMIT')
//   // new Promise((resolve, reject) => {
//   //   login(values)
//   //     .then(
//   //       ({ data }) => resolve(console.log(data, 'SUBMIT DATA')),
//   //       (error) => reject(console.log(error, 'SUBMIT ERROR'))
//   //     )
//   // })
// }

const SignUp = compose(
  withAuth({
    strategy: 'scaphold'
  }),
  withForm({
    form: 'signUp'
  })
)(SignUpForm)

export default SignUp
