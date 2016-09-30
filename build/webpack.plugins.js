import webpack from 'webpack'
import AssetsPlugin from 'assets-webpack-plugin'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import config from '../config'
import renderHtml from './html.config'
import path from 'path'

const root = process.cwd()

// ------------------------------------
// Plugins
// ------------------------------------
export default {
  common: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  assets: new AssetsPlugin({
    path: path.join(root, 'dist'),
    filename: 'assets.json'
  }),
  static: [
    new HtmlWebpackPlugin(renderHtml.index),
    new HtmlWebpackPlugin(renderHtml.twoHundred)
  ],
  hmr: new webpack.HotModuleReplacementPlugin(),
  noErrors: new webpack.NoErrorsPlugin(),
  browserSync: new BrowserSyncPlugin({
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
  dedupe: new webpack.optimize.DedupePlugin(),
  uglify: new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false
    }
  }),
  vendorCommons: new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor']
  })
}
