import stylelint from 'stylelint'
import lost from 'lost'
import fontMagician from 'postcss-font-magician'
import cssNext from 'postcss-cssnext'
import cssReporter from 'postcss-reporter'
import cssBrowserReporter from 'postcss-browser-reporter'
import precss from 'precss'

export default [
  stylelint,
  precss,
  cssNext,
  lost,
  fontMagician({
    formats: 'local woff2 woff ttf eot svg otf'
  }),
  cssBrowserReporter,
  cssReporter
]
