import config from '../config'

const paths = config.utils_paths

export default {
  extensions: [
    '.js',
    '.jsx',
    '.json',
    '.css',
    '.ts',
    '.tsx',
    '.graphql',
    '.gql',
    '.md'
  ],
  modules: [
    '../src',
    'node_modules'
  ]
}
