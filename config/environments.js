const string = value => JSON.stringify(value)

export default {
  development: (config) => ({
    segment_token: string(config.segment_dev),
    globals: {
      ...config.globals,
      __ROLLBAR_ENABLED__: false,
      __ROLLBAR_TOKEN__: string(config.rollbar_client),
    }
  }),

  production: (config) => ({
    segment_token: string(config.segment_prod),
    globals: {
      ...config.globals,
      __ROLLBAR_ENABLED__: true,
      __ROLLBAR_TOKEN__: string(config.rollbar_client),
    }
  }),

  // Test overrides
  // test: (config) => ({})
}
