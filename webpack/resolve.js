import path from 'path'

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
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, '../docs'),
    'node_modules'
  ]
}
