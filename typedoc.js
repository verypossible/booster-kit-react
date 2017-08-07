module.exports = {
  mode: 'modules',
  out: 'typedocs',
  target: 'es6',
  ignoreCompilerErrors: true,
  hideGenerator: true,
  name: 'Very React',
  gitRevision: true,
  json: 'src/lib/docs/typedocs.json',
  exclude: '*.spec',
  stripInternal: 'false'
}
