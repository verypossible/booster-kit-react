const devPlugins = [
  'transform-runtime',
  'transform-async-to-generator'
]

export default {
  babelrc: false,
  presets: [
    ['es2015', { modules: false, loose: true }],
    'stage-0',
    'react'
  ],
  plugins: [
    'styled-components',
    'transform-decorators-legacy',
    'react-hot-loader/babel',
    'syntax-dynamic-import',
    'transform-object-rest-spread'
  ],
  env: {
    production: {
      plugins: [
        'transform-react-inline-elements',
        'transform-react-constant-elements'
      ]
    },
    development: {
      plugins: devPlugins
    }
  }
}
