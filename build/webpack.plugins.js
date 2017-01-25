import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import webpack from 'webpack'
import WebpackMd5Hash from 'webpack-md5-hash'

import config from '../config'
import renderHtml from './html'

const commonsChunkOptions = (
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest'],
    minChunks: Infinity
  })
)

const plugins = {
  common: [
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    }),
    new webpack.DefinePlugin(config.globals),
    new HtmlWebpackPlugin(renderHtml('index.html')),
    new HtmlWebpackPlugin(renderHtml('200.html')),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  development: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new BrowserSyncPlugin({
      open: config.browser_sync_open_window,
      host: config.server_host,
      port: config.browser_sync_port,
      proxy: `${config.server_host}:${config.server_port}`,
      ui: {
        port: config.browser_sync_ui_port
      },
      ghostMode: {
        clicks: true,
        forms: true,
        scroll: true
      }
    }, {
      reload: false
    }),
    commonsChunkOptions
  ],
  production: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: false,
      allChunks: true
    }),
    commonsChunkOptions
  ]
}

export default (ENV) => [...plugins.common, ...plugins[ENV]]
