import express from 'express'
import webpack from 'webpack'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'
// import rollbar from 'rollbar'
import _debug from 'debug'

import config from '../../config'
import webpackConfig from '../../build/webpack.config'
import createSSR from './ssr'

const debug = _debug('app:server:worker')
const PROD = process.env.NODE_ENV === 'production'
const paths = config.utils_paths

export function run (worker) {
  debug('Worker PID:', process.pid)
  const app = express()
  const scServer = worker.scServer
  const httpServer = worker.httpServer
  httpServer.on('request', app)
  // const rollbarOptions = {
  //   exitOnUncaughtException: true
  // }

  // HMR
  if (!PROD) {
    const compiler = webpack(webpackConfig(config.compiler_options))

    debug('Enable webpack dev and HMR middleware')
    app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: config.compiler_public_path,
      contentBase: paths.client(),
      hot: true,
      quiet: config.compiler_quiet,
      noInfo: config.compiler_quiet,
      lazy: false,
      stats: config.compiler_stats
    }))
    app.use(require('webpack-hot-middleware')(compiler))
  }

  // setup middleware
  app.use(bodyParser.json())
  app.use(cors({origin: true, credentials: true}))
  app.use((req, res, next) => {
    if (/\/favicon\.?(jpe?g|png|ico|gif)?$/i.test(req.url)) {
      res.status(404).end()
    } else {
      next()
    }
  })
  if (PROD) {
    app.use(compression())
    app.use('/static', express.static('dist'))
  }
  // app.use(rollbar.errorHandler(process.env.ROLLBAR_SERVER))
  // rollbar.handleUncaughtExceptionsAndRejections(process.env.ROLLBAR_SERVER, rollbarOptions)

  // server-side rendering
  app.get('*')

  // handle sockets
  scServer.on('connection', socket => {
    debug('Client connected:', socket.id)
    // hold the client-submitted docs in a queue while they get validated & handled in the DB
    // then, when the DB emits a change, we know if the client caused it or not
    socket.docQueue = new Set()
    socket.on('disconnect', () => debug('Client disconnected:', socket.id))
  })
}
