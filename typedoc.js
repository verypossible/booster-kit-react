module.exports = {
  mode: 'modules',
  out: 'typedocs',
  target: 'es6',
  ignoreCompilerErrors: true,
  hideGenerator: true,
  name: 'Very React',
  gitRevision: true,
  json: './typedocs.json',
  exclude: '*.spec',
  stripInternal: 'false'
}
