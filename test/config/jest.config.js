/* eslint-disbale */
const moduleNameMaps = {
  '^.+\\.(md|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/test/__mocks__/fileMock.js'
}

const jestConfig = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js',
    '\\.(gql|graphql)$': './test/config/transformGraphQL.js'
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
    __TEST__: true,
    __ROLLBAR_CLIENT__: false,
    __ROLLBAR_SERVER__: false,
    __ROLLBAR_ENABLED__: false,
    __INTERCOM_ID__: false,
    __INTERCOM_SECRET__: false,
    __ROLLBAR_TOKEN__: false,
    __COMMIT_HASH__: false,
    __GRAPHQL_API__: 'us-west-2.api.scaphold.io/graphql/very-react',
    __AUTH_CID__: 'YsM6qRbwxDUf9jySjt9vXTzjgvuRIKED',
    __AUTH_URL__: 'veryservices.auth0.com',
    __AUTH_REDIRECT_URI__: 'http://localhost:3000/callback',
    __AUTH_REDIRECT_URI_SILENT__: 'http://localhost:3000/silent_callback',
    __CLIENT_TOKEN__: false
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
  coveragePathIgnorePatterns: ['/node_modules/', '^.*(d.ts?)', '^.*(gql|md?)'],
  moduleNameMapper: moduleNameMaps,
  testPathIgnorePatterns: [
    '/blueprints/.*|\\.md$',
    '(\\stories.tsx?)'
  ],
  setupFiles: ['./test/config/requestAnimationPolyfill.js'],
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
