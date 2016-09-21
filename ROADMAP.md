# Roadmap

* Enhance the Koa static server to provide options to render and serve React markup via a production Node server. This will enable us run small sites that depend on SEO friendly markup with ease.
* Enhance the Webpack build process to generate all html files with SEO friendly markup via React's `renderToSring` server function.
* Integrate SocketCluster on the server and client
* Enhance configuration to easily support three different build types - static client, universal app, and static site generation.
* Refactor Webpack configuration to better support different build types. It should be a factory.
* Remove `node-babael` as a dependency for builds and replace it with `babel-register` - this will improve production performance.




For when we start converting the static Koa server into a universal server that servers React:
* "koa": "^2.0.0-alpha.3",
* "koa-bodyparser": "^3.1.0",
* "koa-convert": "^1.2.0",
* "koa-cors": "0.0.16",
* "koa-passport": "^2.1.1",
* "koa-proxy": "^0.6.0",
* "koa-route": "^2.4.2",
* "koa-session": "^3.3.1",
* "koa-static": "^3.0.0",