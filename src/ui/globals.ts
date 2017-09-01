import highlight from './highlight'
import { injectGlobal } from './index'
import normalize from './normalize'

export default () => injectGlobal`
  ${normalize}
  ${highlight}

  a {
    text-decoration: none;
  }

  html {
    box-sizing: border-box
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    text-rendering: optimizeLegibility;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`
