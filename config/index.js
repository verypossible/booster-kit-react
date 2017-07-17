/* eslint key-spacing:0 spaced-comment:0 */
import path from 'path'
import _debug from 'debug'
import { argv } from 'yargs'

const debug = _debug('app:config')
debug('Creating default configuration.')

// ========================================================
// Default Configuration
// ========================================================
const config = {
  env    : process.env.NODE_ENV || 'development',

  app_name : 'reactBoosterKit',

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base     : path.resolve(__dirname, '..'),
  dir_src       : 'src',
  dir_build     : 'build',
  dir_test      : 'tests',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_protocol    : process.env.PROTOCOL || 'http',
  server_host        : process.env.HOST || 'localhost',
  server_port        : process.env.PORT || 3000,

  // ----------------------------------
  // BrowserSync Options
  // ----------------------------------
  browser_sync_port        : 3010,
  browser_sync_ui_port     : 3011,
  browser_sync_open_window : false,

  // ----------------------------------
  // Rollbar Tokens
  // ----------------------------------
  rollbar_client  : 'bc54120a29d747309c1beeb8d2e024a1',
  rollbar_server  : '85651afd5f674040bdd94969fa856680',

  // ----------------------------------
  // Analytics
  // ----------------------------------
  segment_dev  : 'QpF5Rgp3JayD8pwJ3uwlOAUKI95wWRvk',
  segment_prod : 'Qt0CVzWXKQzk4TTAm4QoR87mliiNRtsZ',

  // ----------------------------------
  // Graphql
  // ----------------------------------
  graphql_server  : 'https://us-west-2.api.scaphold.io/graphql/very-react',

  // ----------------------------------
  // Auth0
  // ----------------------------------
  auth_cid: 'YsM6qRbwxDUf9jySjt9vXTzjgvuRIKED',
  auth_url: 'veryservices.auth0.com',
  auth_redirectUri: '/callback',

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_options         : {
    env: process.env.NODE_ENV || 'development'
  },
  compiler_stats           : {
    chunks : false,
    chunkModules : false,
    colors : true
  },
  compiler_fail_on_warning : false
}

config.server_url = `${config.server_protocol}://${config.server_host}:${config.server_port}`
config.testServer = process.env.TEST_SERVER || `${config.server_url}`

// ------------------------------------
// Environment
// ------------------------------------
// N.B.: globals added here must _also_ be added to .eslintrc
config.globals = {
  'process.env'  : {
    NODE_ENV : JSON.stringify(config.env)
  },
  NODE_ENV        : config.env,
  __DEV__         : config.env === 'development',
  __PROD__        : config.env === 'production',
  __TEST__        : config.env === 'test',
  __DEBUG__       : config.env === 'development' && !argv.no_debug,
  __COVERAGE__    : !argv.watch && config.env === 'test',
  __PROTOCOL__    : config.server_protocol,
  __HOST__        : config.server_host,
  __PORT__        : config.server_port,
  __TEST_SERVER__ : config.test_server,
  __GRAPHQL_API__ : JSON.stringify(config.graphql_server),
  __AUTH_CID__    : JSON.stringify(config.auth_cid),
  __AUTH_URL__    : JSON.stringify(config.auth_url)
}

// ------------------------------------
// Utilities
// ------------------------------------
function base () {
  const args = [config.path_base].concat([].slice.call(arguments))
  return path.resolve.apply(path, args)
}

config.utils_paths = {
  base      : base,
  src       : base.bind(null, config.dir_src),
  build     : base.bind(null, config.dir_build),
}

// ========================================================
// Environment Configuration
// ========================================================
debug(`Looking for environment overrides for NODE_ENV "${config.env}".`)
const environments = require('./environments').default
const overrides = environments[config.env]
if (overrides) {
  debug('Found overrides, applying to default configuration.')
  Object.assign(config, overrides(config))
} else {
  debug('No environment overrides found, defaults will be used.')
}

export default config
