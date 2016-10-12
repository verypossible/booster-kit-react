// ---------------------------------------
// Test Environment Setup
// ---------------------------------------
import 'babel-polyfill'
import sinon from 'sinon'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiEnzyme from 'chai-enzyme'

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiEnzyme())

global.chai = chai
global.sinon = sinon
global.expect = chai.expect
global.should = chai.should()

const __karmaWebpackManifest__ = new Array() // eslint-disable-line

const inManifest = (path) => ~__karmaWebpackManifest__.indexOf(path)

const testsContext = require.context('./', true, /\.spec\.js$/)
const universalContext = require.context('../universal', true, /\.spec\.js$/)

function runTests (context) {
  const testsToRun = context.keys().filter(inManifest)

  return (testsToRun.length ? testsToRun : context.keys()).forEach(context)
}

runTests(testsContext)
runTests(universalContext)

if (__COVERAGE__) {
  const componentsContext = require.context(
    '../universal/', true, /^((?!main|.stories).)*\.js$/
  )
  componentsContext.keys().forEach(componentsContext)
}
