import webpack from 'webpack'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import AssetsPlugin from 'assets-webpack-plugin'

import postcssPlugins from './webpack.postcss'
import config from '../config'
import renderHtml from '../src/static/html.config'

const paths = config.utils_paths

const commonsChunkOptions = (
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest'],
    minChunks: Infinity
  })
)

const webpackPlugins = {
  common: [
    new webpack.DefinePlugin(config.globals),
    new webpack.NoErrorsPlugin(),
    new webpack.EnvironmentPlugin([
      'API_PROTOCOL',
      'API_HOST',
      'API_PORT',
      'NODE_ENV'
    ]),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: function () {
          return postcssPlugins
        }
      }
    })
  ],
  development: [
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      open: config.browser_sync_open_window,
      host: config.server_host,
      port: config.browser_sync_port,
      proxy: config.compiler_public_path,
      ui: {
        port: config.browser_sync_ui_port
      }
    }, {
      reload: false
    }),
    commonsChunkOptions
  ],
  production: [
    new AssetsPlugin({path: paths.dist(), filename: 'assets.json'}),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 50000}),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    commonsChunkOptions
  ],
  static: [
    new HtmlWebpackPlugin(renderHtml.index),
    new HtmlWebpackPlugin(renderHtml.twoHundred)
  ],
  server: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1})
  ]
}

export default webpackPlugins
