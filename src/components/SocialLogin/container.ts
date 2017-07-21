import withAuth from 'hoc/withAuth'
import { compose } from 'lib/helpers'

import SocialLogin from './component'

export default compose(
  withAuth()
)(SocialLogin)
