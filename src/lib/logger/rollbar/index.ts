import rollbar from './rollbar.umd.nojson.min'

export default rollbar.init({
  accessToken: __ROLLBAR_TOKEN__,
  captureUncaught: true,
  captureUnhandledRejections: true,
  enabled: __ROLLBAR_ENABLED__,
  payload: {
    client: {
      javascript: {
        code_version: __COMMIT_HASH__,
        guess_uncaught_frames: true,
        source_map_enabled: true
      }
    },
    environment: __PROD__ ? 'production' : 'development'
  }
})
