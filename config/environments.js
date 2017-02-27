const string = (value) => JSON.stringify(value)

export default {
  // Development overrides
  development: (config) => ({
    globals: {
      ...config.globals,
      '__SERVER_URL__': string('http://localhost:4000/api/v1')
    }
  }),

  // Production overrides
  production: (config) => ({
    globals: {
      ...config.globals,
      '__SERVER_URL__': string('https://api.foresight.io/api/v1')
    }
  })

  // Test overrides
  // test: (config) => ({})
}
