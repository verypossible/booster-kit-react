import config from '../config'
import server from './express'
import _debug from 'debug'

const debug = _debug('app:bin:server')
const protocol = config.server_protocol
const port = config.server_port
const host = config.server_host

server.listen(port)
debug(`Server is now running at ${protocol}://${host}:${port}.`)
debug(`Server accessible via ${host}:${port} if you are using the project defaults.`)
