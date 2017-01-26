/* @flow */
import React from 'react'

import Home from 'layouts/Home'

const RootRoute = () => (
  <Home />
)

export default [{
  pattern: '/',
  component: RootRoute,
  exactly: true
}]
