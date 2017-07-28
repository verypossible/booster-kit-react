import { authSocialProvider } from 'hoc/withAuth'
import { compose } from 'lib/helpers'

import SocialLogin from './component'

const enhance = compose(
  authSocialProvider
)

export default enhance(SocialLogin)
