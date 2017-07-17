const string = value => JSON.stringify(value)

export default {
  development: (config) => ({
    segment_token: string(config.segment_dev),
    globals: {
      ...config.globals,
      __ROLLBAR_ENABLED__: false,
      __ROLLBAR_TOKEN__: string(config.rollbar_client),
      __AUTH_REDIRECT_URI__: string(`${config.server_url}${config.auth_redirectUri}`),
      __AUTH_REDIRECT_URI_SILENT__: string(`${config.server_url}/silent-callback`)
    }
  }),

  production: (config) => ({
    segment_token: string(config.segment_prod),
    globals: {
      ...config.globals,
      __ROLLBAR_ENABLED__: true,
      __ROLLBAR_TOKEN__: string(config.rollbar_client),
      __AUTH_REDIRECT_URI__: string(`${config.server_url}${config.auth_redirectUri}`),
      __AUTH_REDIRECT_URI_SILENT__: string(`${config.server_url}/silent-callback`)
    }
  }),

  // Test overrides
  // test: (config) => ({})
}
