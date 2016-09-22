import config from '../config'
import server from '../src/server/koa'
import _debug from 'debug'

const debug = _debug('app:bin:server:koa')
const port = config.server_port
const host = config.server_host

server.listen(port)
debug(`Server is now running at http://${host}:${port}.`)
debug(`Server accessible via localhost:${port} if you are using the project defaults.`)
