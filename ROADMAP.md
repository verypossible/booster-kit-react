# Roadmap

* Enhance the Webpack & create SSR for server so the build process generates all html files with SEO friendly markup via React's `renderToSring` server function.
* Integrate SocketCluster on the server and client
* Enhance configuration to easily support three different build types - static client and universal app.
* **[completed]** Refactor Webpack configuration to better support different build types. It should be a factory.
* **[completed]** Remove `node-babel` as a dependency for builds and replace it with `babel-register` - this will improve production performance.

* **[completed]** Decide between express and koa.
* **[completed]** Decide between ava and jest for testing.
* Setup SSR.
* Setup React Helmet for page specific head and meta tags.
