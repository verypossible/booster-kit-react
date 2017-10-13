module.exports = {
  mode: 'modules',
  out: 'typedocs',
  target: 'es5',
  ignoreCompilerErrors: true,
  hideGenerator: true,
  name: 'Very React',
  gitRevision: true,
  json: './typedocs.json',
  exclude: '*.spec',
  stripInternal: 'false'
}
