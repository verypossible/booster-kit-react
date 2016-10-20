import { SocketCluster } from 'socketcluster'
import os from 'os'
import path from 'path'

const numCpus = os.cpus().length

export const options = {
  logLevel: 1,
  // change this to scale vertically
  workers: 1 || numCpus,
  brokers: 1,
  port: process.env.PORT || 3000,
  appName: 'JoinSpartan',
  allowClientPublish: false,
  initController: path.join(__dirname, '/init.js'),
  workerController: path.join(__dirname, '/worker.js'),
  brokerController: path.join(__dirname, '/broker.js'),
  socketChannelLimit: 1000,
  rebootWorkerOnCrash: true
}

new SocketCluster(options) // eslint-disable-line no-new
