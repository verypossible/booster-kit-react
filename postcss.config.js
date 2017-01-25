module.exports = {
  plugins: [
    require('stylelint'),
    require('precss'),
    require('postcss-cssnext'),
    require('lost'),
    require('postcss-font-magician'),
    require('postcss-browser-reporter'),
    require('postcss-reporter')
  ]
}
