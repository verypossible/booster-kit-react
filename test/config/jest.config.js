/* eslint-disbale */
const moduleNameMaps = {
  '^.+\\.(md|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/test/__mocks__/fileMock.js',
}

const jestConfig = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  globals: {
    NODE_ENV: false,
    __DEV__: true,
    __PROD__: false,
    __CI__: false,
    __DEBUG__: false,
    __COVERAGE__: false,
    __PROTOCOL__: false,
    __HOST__: false,
    __PORT__: false,
    __SEGMENT__: false,
    __ROLLBAR_CLIENT__: false,
    __ROLLBAR_SERVER__: false,
    __INTERCOM_ID__: false,
    __INTERCOM_SECRET__: false,
    __ROLLBAR_TOKEN__: false,
    __COMMIT_HASH__: false
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx',
    'md',
    'graphql',
    'gql'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  bail: true,
  testURL: 'http://localhost:3000',
  verbose: true,
  collectCoverageFrom: ['**/src/**'],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/*.d.ts/'],
  moduleNameMapper: moduleNameMaps,
  testPathIgnorePatterns: [
    '/blueprints/.*|\\.md$',
    '(\\stories.jsx?)'
  ],
  setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js'
}

if (process.env.COVERAGE) {
  jestConfig.collectCoverage = true
}

if (process.env.TEST_SPECS && !process.env.TEST_FEATURES) {
  jestConfig.testRegex = '(/__tests__/.*|\\.(spec))\\.(ts|tsx|js)$'
}

if (process.env.TEST_FEATURES && !process.env.TEST_SPECS) {
  jestConfig.testRegex = '(/__tests__/.*|\\.(feature))\\.(ts|tsx|js)$'
}

if (process.env.TEST_FEATURES && process.env.TEST_SPECS) {
  jestConfig.testRegex = '(/__tests__/.*|\\.(feature|spec))\\.(ts|tsx|js)$'
}

module.exports = jestConfig
