import socketCluster from 'socketcluster-client'

const socket = socketCluster.connect()

socket.emit('sampleClientEvent', {message: 'This is an object with a message property'})
