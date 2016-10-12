import LayoutCore from 'layouts/LayoutCore'
import Home from 'layouts/Home'

import LayoutSidebar from 'layouts/LayoutSidebar'
import Counter from 'modules/Counter'
import Markdown from 'components/Markdown'

export const createRoutes = (store) => ({
  path: '/',
  component: LayoutCore,
  indexRoute: Home,
  childRoutes: [
    {
      path: 'react',
      component: LayoutSidebar,
      childRoutes: [
        {
          path: 'counter',
          component: Counter(store)
        },
        {
          path: 'markdown',
          component: Markdown
        }
      ],

      path: 'context.html'
    }
  ]
})

export default createRoutes
