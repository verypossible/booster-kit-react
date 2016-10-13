import webpack from 'webpack'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import postcssPlugins from './webpack.postcss'
import config from '../config'
import renderHtml from './html.config'

const commonsChunkOptions = (
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor']
  })
)

const webpackPlugins = {
  common: [
    new webpack.DefinePlugin(config.globals),
    new HtmlWebpackPlugin(renderHtml.index),
    new HtmlWebpackPlugin(renderHtml.twoHundred),
    new webpack.EnvironmentPlugin([
      'API_PROTOCOL',
      'API_HOST',
      'API_PORT'
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
    new webpack.NoErrorsPlugin(),
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    }),
    commonsChunkOptions
  ]
}

export default webpackPlugins
