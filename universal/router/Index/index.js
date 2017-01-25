/* @flow */
import React from 'react'

import Home from 'layouts/Home'

const HomeRoute = () => (
  <Home />
)

export default [{
  pattern: '/',
  component: HomeRoute,
  exactly: true
}]
