import path from "path";
import BrowserSyncPlugin from "browser-sync-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ManifestPlugin from "webpack-manifest-plugin";
import webpack from "webpack";
import WebpackMd5Hash from "webpack-md5-hash";
import CopyWebpackPlugin from "copy-webpack-plugin";
import RollbarSourceMapPlugin from "rollbar-sourcemap-webpack-plugin";
import GitRevisionPlugin from "git-revision-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";

import { CheckerPlugin } from "awesome-typescript-loader";

import config from "../config";
import renderHtml from "./html";

const gitRevisionPlugin = new GitRevisionPlugin();
const commitHash = JSON.stringify(gitRevisionPlugin.commithash());

const base = [
  gitRevisionPlugin,
  new WebpackMd5Hash(),
  new ManifestPlugin(),
  new CheckerPlugin(),
  new webpack.DefinePlugin({
    ...config.globals,
    __COMMIT_HASH__: commitHash
  }),
  new HtmlWebpackPlugin(renderHtml("index")),
  new HtmlWebpackPlugin(renderHtml("silent-callback")),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.png$|\.jpg$|\.md$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
];

const development = [
  new webpack.HotModuleReplacementPlugin(),
  new BrowserSyncPlugin(
    {
      ghostMode: {
        clicks: true,
        forms: true,
        scroll: true
      },
      host: config.server_host,
      open: config.browser_sync_open_window,
      port: config.browser_sync_port,
      proxy: `${config.server_host}:${config.server_port}`,
      ui: {
        port: config.browser_sync_ui_port
      }
    },
    {
      reload: false
    }
  )
];

const production = [
  new CopyWebpackPlugin([{ from: "../src/static" }]),
  new ExtractTextPlugin({
    allChunks: true,
    disable: false,
    filename: "[name].[contenthash].css",
    ignoreOrder: true
  }),
  new webpack.IgnorePlugin(/^\.(feature|spec|stories)\\.(ts|tsx|js)$/),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.LoaderOptionsPlugin({
    debug: false
  })
];

export default {
  base,
  development,
  production
};
