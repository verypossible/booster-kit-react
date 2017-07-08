import path from 'path'
import webpack from 'webpack'
import _debug from 'debug'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'
import { CheckerPlugin, TsConfigPathsPlugin } from 'awesome-typescript-loader'

import config from '../config'

import rules from './rules'
import renderHtml from './html'
import resolve from './resolve'
import entry from './entry'
import plugins from './plugins'

const paths = config.utils_paths
const debug = _debug('app:webpack:config')

debug(`Loading webpack configuration for ${config.env}`)
export default {
  context: paths.src(),
  resolve,
  target: 'web',
  entry,
  output: {
    path: paths.build()
  },
  plugins: plugins.base,
  module: {
    rules
  }
}
