# React Redux Booster Kit

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/338bf79312184e0f9bbaeacf710e0fc9)](https://www.codacy.com/app/Spartan/booster-kit-react?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=spartansystems/booster-kit-react&amp;utm_campaign=Badge_Grade)
[![CircleCI](https://circleci.com/gh/spartansystems/booster-kit-react/tree/master.svg?style=svg)](https://circleci.com/gh/spartansystems/booster-kit-react/tree/master)
[![dependencies](https://david-dm.org/spartansystems/booster-kit-react.svg)](https://david-dm.org/spartansystems/booster-kit-react)
[![devDependency Status](https://david-dm.org/spartansystems/booster-kit-react/dev-status.svg)](https://david-dm.org/spartansystems/booster-kit-react/#info=devDependencies)

## Demo
The microsite for [Spartan's booster kits](http://boosters.joinspartan.com) was built with this framework. Check out  [specific examples](http://boosters.joinspartan.com/react-web/markdown) and further usage instruction.

## Table of Contents
1. [Features](#features)
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Development](#development)
  1. [Developer Tools](#developer-tools)
  1. [Routing](#routing)
1. [Testing](#testing)
1. [Deployment](#deployment)
    1. [Static Deployments With Surge](#static-deployments)
    1. [Integration With Rails Booster Kit](#integration-with-the-rails-booster-kit)
    1. [Integration With Phoenix Booster Kit](#integration-with-the-phoenix-booster-kit)
    1. [Universal Node App](#universal-node-app)
1. [Production Optimization](#production-optimization)
1. [Build System](#build-system)
  1. [Configuration](#configuration)
  1. [Root Resolve](#root-resolve)
  1. [Globals](#globals)
  1. [Styles](#styles)
  1. [Server](#server)
1. [Learning Resources](#learning-resources)
1. [Known Issues](#known-issues)
1. [Contributing](#contributing)

## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
* [redux-form](http://redux-form.com/)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [koa](https://github.com/koajs/koa)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org)
* [browser-sync](https://www.browsersync.io/)
* [surge](http://surge.sh/)

## Requirements
* node `^6.2.0`
* npm `^3.10.2`

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can follow these steps to get the project up and running:

```bash
$ git clone https://github.com/spartansystems/booster-kit-react.git
$ cd booster-kit-react
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

If everything works, you should see the following:

<img src="http://i.imgur.com/zR7VRG6.png?2" />

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`codecov`|Generates code coverage info via [codecov.io](https://www.npmjs.com/package/codecov.io).|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`publish`|Publishes `./dist` to the specified Surge domain.|
|`publish:prod`|Same as `publish` but recompiles the assets to `./dist` before publishing.|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

```
.
├── bin                      # Build/Start scripts
├── blueprints               # Blueprint files for redux-cli
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── client                   # Contains HTML templates used during build compilation
│   └── index.js             # Client entry and rendering
├── config                   # Project configuration settings
├── server                   # Express application (uses webpack middleware)
│   └── index.js             # Server application entry point
├── universal                # Shared application source code
│   ├── components           # Reusable Presentational Components
│   ├── containers           # Reusable Container Components
│   ├── layouts              # Components that dictate major page structure
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── styles               # Application-wide styles (generally settings)
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── routes               # Main route definitions and async split points
│       ├── index.js         # Bootstrap main application routes with store
│       └── Home             # Fractal route
│           ├── index.js     # Route definitions and async split points
│           ├── assets       # Assets required to render components
│           ├── components   # Presentational React Components
│           ├── container    # Connect components to actions and store
│           ├── modules      # Collections of reducers/constants/actions
│           └── routes **    # Fractal sub-routes (** optional)
└── tests                    # Unit tests
```

## Development

#### Developer Tools

**Make sure you install the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn’t require installing any packages.

However, adding the DevTools components to your project is simple. First, grab the packages from npm:

```bash
npm i --save-dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

### Routing
We use `react-router` [plain route definitions](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application. See the [application structure](#application-structure) section for more information.

## Testing
To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them. If you are using `redux-cli`, test files should automatically be generated when you create a component or redux module.

Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/index.js`.

We're currently evaluating [Ava](https://github.com/avajs/ava) - which is installed in this project - so feel free to explore writing tests with this runner. The main benefits are the speed at which it can concurrently run tests.

## Deployment
Out of the box, this starter kit is deployable by serving the `~/dist` folder generated by `npm run deploy` (make sure to specify your target `NODE_ENV` as well).

### Static Deployments
If you are serving the application via a web server such as nginx, make sure to direct incoming routes to the root `~/dist/index.html` file and let react-router take care of the rest. We are planning on enhancing the Express server that comes with the starter kit to be extended to serve as an API and server rendered React components, so if you're interested in helping - feel free to jump in!

#### Publish With Surge
If you want to simply publish the site as a static client, the project is configured to use [surge.sh](http://surge.sh/).

Steps to publish:
* `npm install -g surge`
* `surge` to create your account and complete the initial build.
* Update the new host domain path in `CNAME` and in the `publish` npm script in `package.json`.

`circle.yml` is configured to publish on successful merges into master, but you will still need to provide it with a Surge auth token. [Read more](http://surge.sh/help/integrating-with-circleci) about Surge continous deployment via CIrcleCI.

### Server Side Rendering  
#### Integration With The Rails Booster Kit
Coming soon...

#### Integration With The Phoenix Booster Kit
This project is configured to use Phoenix Channels out of the box via [phoenixjs](https://www.npmjs.com/package/phoenixjs).

Example usage:
```
import { Socket } from 'phoenix'
```

#### Universal Node App
This app has not been optimized (yet) to render static markup on the server. This is necessary to get an SEO friendly web client. To accomplish this, we could either follow the [official Redux universal example](https://github.com/reactjs/redux/tree/master/examples/universal) or explore alternative options like [redux-connect](https://github.com/makeomatic/redux-connect).

##### Heroku

Heroku has `nodejs buildpack` script that does the following when you deploy your app to Heroku.
1. Find `packages.json` in the root directory.
2. Install `nodejs` and `npm` packages.
3. Run `npm postinstall script`
4. Run `npm start`

Therefore, you need to modify `package.json` before deploying to Heroku. Make the following changes in the `scripts` section of `package.json`.

```javascript
...
"start": "better-npm-run start:prod",
"serve": "better-npm-run start",
"postinstall": "npm run deploy:prod",
"betterScripts": {
  ...
  "start:prod": {
    "command": "babel-node bin/server",
    "env": {
      "NODE_ENV": "production"
    }
  }
  ...
},
```

It's also important to tell Heroku to install all `devDependencies` to successfully compile your app on Heroku's environment. Run the following in your terminal.

```bash
$ heroku config:set NPM_CONFIG_PRODUCTION=false
```

With this setup, you will install all the necessray packages, build your app, and start the webserver (e.g. koa) everytime you push your app to Heroku. Try to deploy to Heroku by running the following commands.

```bash
$ git add .
$ git commit -m 'My awesome commit'
$ git push heroku master
```

If you fail to deploy for an unknown reason, try [this helpful comment](https://github.com/davezuko/react-redux-starter-kit/issues/730#issuecomment-213997120) by [DonHansDampf](https://github.com/DonHansDampf) addressing Heroku deployments.

Have more questions? Feel free to submit an issue or join the Gitter chat!

## Build System

### Configuration

Default project configuration can be found in `~/config/index.js`. Here you'll be able to redefine your `src` and `dist` directories, adjust compilation settings, tweak your vendor dependencies, and more. For the most part, you should be able to make changes in here **without ever having to touch the actual webpack build configuration**.

If you need environment-specific overrides (useful for dynamically setting API endpoints, for example), you can edit `~/config/environments.js` and define overrides on a per-NODE_ENV basis. There are examples for both `development` and `production`, so use those as guidelines. Here are some common configuration options:

|Key|Description|
|---|-----------|
|`dir_src`|application source code base path|
|`dir_dist`|path to build compiled application to|
|`server_host`|hostname for the Koa server|
|`server_port`|port for the Koa server|
|`compiler_css_modules`|whether or not to enable CSS modules|
|`compiler_devtool`|what type of source-maps to generate (set to `false`/`null` to disable)|
|`compiler_vendor`|packages to separate into to the vendor bundle|


### Root Resolve
Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), which lets you import local packages as if you were traversing from the root of your `~/universal` directory. Here's an example:

```js
// current file: ~/universal/views/some/nested/View.js
// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

### Globals

These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found as the `globals` key in `~/config/index.js`. When adding new globals, make sure you also add them to `~/.eslintrc`.

|Variable|Description|
|---|---|
|`process.env.NODE_ENV`|the active `NODE_ENV` when the build started|
|`__DEV__`|True when `process.env.NODE_ENV` is `development`|
|`__PROD__`|True when `process.env.NODE_ENV` is `production`|
|`__TEST__`|True when `process.env.NODE_ENV` is `test`|
|`__DEBUG__`|True when `process.env.NODE_ENV` is `development` and cli arg `--no_debug` is not set (`npm run dev:no-debug`)|
|`__BASENAME__`|[history basename option](https://github.com/rackt/history/blob/master/docs/BasenameSupport.md)|

### Styles

Both `.scss` and `.css` file extensions are supported out of the box and are configured to use [CSS Modules](https://github.com/css-modules/css-modules). After being imported, styles will be processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be extracted to a `.css` file during production builds.

#### Configured PostCSS Plugins
* [stylelint](https://github.com/stylelint/stylelint) - CSS linting via [default community standards](https://github.com/stylelint/stylelint-config-standard/blob/master/index.js)
* [cssNext](http://cssnext.io/) - Like Babel but for new CSS specs.
* [precss](https://github.com/jonathantneal/precss) - Allows you to use SASS-like syntax in CSS files.
* [lost](https://github.com/peterramsing/lost) - A lightweight and extremely powerful grid system.
* [fontMagician](https://github.com/jonathantneal/postcss-font-magician) - Creates all `@font-face` rules automagically.
* [browserReporter](https://github.com/postcss/postcss-browser-reporter) - Like Redbox but for CSS. It overlays CSS errors at the top of the browser window so you don't have to constantly check the console to see if something is broken.

You can browser additional plugins at [postcss.parts](http://postcss.parts/)

### Server

This booster kit comes packaged with an Express server. It's important to note that the sole purpose of this server is to provide `webpack-dev-middleware` and `webpack-hot-middleware` for hot module replacement. Using a custom Express app in place of [webpack-dev-server](https://github.com/webpack/webpack-dev-server) makes it easier to extend the starter kit to include functionality such as API's, universal rendering, and more -- all without bloating the base boilerplate.

### Production Optimization

Babel is configured to use [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined. Additionally, in production, we use [react-optimize](https://github.com/thejameskyle/babel-react-optimize) to further optimize your React code.

In production, webpack will extract styles to a `.css` file, minify your JavaScript, and perform additional optimizations such as module deduplication.

## Learning Resources

* [Starting out with react-redux-starter-kit](https://suspicious.website/2016/04/29/starting-out-with-react-redux-starter-kit/) is an introduction to the components used in this starter kit with a small example in the end.

## Known Issues
* We cannot upgrade to `history@3.0.0` until [this is resolved](https://github.com/reactjs/react-router/issues/3515)

## Contributing

Please review the [contributing guidelines](/.github/CONTRIBUTING.md)


## Thanks

This project wouldn't be without the awesome work Dave and the other contributors have done on [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit/).
