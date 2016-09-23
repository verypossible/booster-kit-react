/* eslint key-spacing:0 spaced-comment:0 */
import path from 'path'
import _debug from 'debug'
import { argv } from 'yargs'
import ip from 'ip'

const localip = ip.address()
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
  path_base     : path.resolve(__dirname, '../src'),
  dir_client    : path.resolve(__dirname, '../src/client'),
  dir_universal : path.resolve(__dirname, '../src/universal'),
  dir_dist      : path.resolve(__dirname, '../dist'),
  dir_server    : path.resolve(__dirname, '../src/server'),
  dir_test      : path.resolve(__dirname, '../test'),

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host    : localip, // use string 'localhost' to prevent exposure on local network
  server_port    : process.env.PORT || 3000,

  // ----------------------------------
  // Socket Configuration
  // ----------------------------------
  socket_channel_limit     : 1000,
  socket_log_level         : 1,
  socket_workers           : 1,
  socket_brokers           : 1,
  socket_engine            : 1,

  // ----------------------------------
  // BrowserSync Options
  // ----------------------------------
  browser_sync_port        : 4000,
  browser_sync_ui_port     : 4001,
  browser_sync_open_window : false,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_devtool         : 'source-map',
  compiler_hash_type       : 'hash',
  compiler_fail_on_warning : false,
  compiler_quiet           : false,
  compiler_public_path     : '/',
  compiler_stats           : {
    chunks : false,
    chunkModules : false,
    colors : true,
    hot: true
  },
  compiler_vendor : [
    'babel-polyfill',
    'react',
    'react-redux',
    'react-router',
    'redux'
  ],

  // ----------------------------------
  // Test Configuration
  // ----------------------------------
  coverage_reporters : [
    { type : 'text-summary' },
    { type : 'lcov', dir : 'coverage' }
  ]
}

/************************************************
-------------------------------------------------

All Internal Configuration Below
Edit at Your Own Risk

-------------------------------------------------
************************************************/

// ------------------------------------
// Environment
// ------------------------------------
// N.B.: globals added here must _also_ be added to .eslintrc
config.globals = {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.env)
  },
  'NODE_ENV'     : config.env,
  '__DEV__'      : config.env === 'development',
  '__PROD__'     : config.env === 'production',
  '__TEST__'     : config.env === 'test',
  '__DEBUG__'    : config.env === 'development' && !argv.no_debug,
  '__COVERAGE__' : !argv.watch && config.env === 'test'
}

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
const pkg = require('../package.json')

config.compiler_vendor = config.compiler_vendor
  .filter((dep) => {
    if (pkg.dependencies[dep]) return true

    debug(
      `Package "${dep}" was not found as an npm dependency in package.json; ` +
      `it won't be included in the webpack vendor bundle.
       Consider removing it from vendor_dependencies in ~/config/index.js`
    )
  })

// ------------------------------------
// Utilities
// ------------------------------------
// function base () {
//   const args = [config.path_base].concat([].slice.call(arguments))
//   return path.resolve.apply(path, args)
// }

config.utils_paths = {
  client    : config.dir_client,
  dist      : config.dir_dist,
  server    : config.dir_server,
  universal : config.dir_universal
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
