// Environment specific base config over rides
export default {
  development: (config) => ({
    compiler_public_path: `${config.server_url}/`,
    compiler_devtool: 'eval'
  }),

  production: (config) => ({
    compiler_public_path: '/static/',
    compiler_fail_on_warning: true,
    compiler_hash_type: 'chunkhash',
    compiler_devtool: false,
    compiler_stats: {
      chunks: false,
      chunkModules: true,
      colors: true
    }
  })
}
