export default ({html, assets, preloadedState}) => `
  <!doctype html>
  <html>
    <head>
      <title>Kits For Common Projects To Give You A Little Boost | Courtesy Of Spartan</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
      </script>
      <script src="${assets.index}"></script>
    </body>
  </html>
`
