import * as React from 'react'

import { DocsContainer } from 'lib/docs'
import { Route } from 'lib/router'

const DocsRoutes = (props) => <Route path='/docs' component={DocsContainer} {...props} />

export default DocsRoutes
