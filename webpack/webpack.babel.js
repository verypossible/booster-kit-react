module.exports = {
  'presets': [
    ['es2015', { 'modules': false, 'loose': true }],
    'stage-0',
    'react'
  ],
  'plugins': [
    'transform-decorators-legacy',
    'react-hot-loader/babel',
    'syntax-dynamic-import',
    'transform-object-rest-spread'
  ],
  'env': {
    'production': {
      'plugins': [
        'transform-react-inline-elements',
        'transform-react-constant-elements',
        'transform-flow-strip-types'
      ]
    },
    'development': {
      'plugins': [
        'transform-runtime',
        'transform-async-to-generator'
      ]
    }
  }
}
