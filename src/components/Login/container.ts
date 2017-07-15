import withAuth from 'hoc/withAuth'
import { compose } from 'lib/helpers'

import Login from './component'

const enhance = compose(
  withAuth()
)

export default enhance(Login)
