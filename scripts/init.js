require('babel-register')
var fs = require('fs')

var jestJS = require('../test/config/jest.config.js')

var jestConfig = JSON.stringify(jestJS)

fs.writeFile('jest.config.json', jestConfig)
