### Learn About React Storybooks
https://getstorybook.io/docs/basics/introduction

### Webpack setup
The webpack config file in this directory is configured using most of the same configs from the app's webpack configuration. Instead of duplicating efforts entirely, we're currently using the [Full Control](https://getstorybook.io/docs/configurations/custom-webpack-config) option for extending Storybook's default webpack config.

The few minor configs that needed to be manually set are a result of the ongoing transition in the community from Webpack 1 to Webpack 2.

### Example Story
* See `universal/components/Button/button.stories.js`

### Example Of Wrapping Storybook With App + Redux Store
...courtesy of our very own J. Wong. w00t

```
  import React from 'react'
  import { Provider } from 'react-redux'
  import { combineReducers, createStore } from 'redux'
  import { reducer } from 'redux-form'
  import CoreLayout from '../universal/layouts/CoreLayout'

  const store = createStore(
    combineReducers({
      form: reducer,
    })
  )

  addDecorator((story) => (
    <Provider store={store}>
      <div style={{ height: '100%' }}>
        <CoreLayout>
          {story()}
        </CoreLayout>
      </div>
    </Provider>
  ))
```

### Configured Addons
* [Actions](https://github.com/kadirahq/storybook-addon-actions) and [Links](https://github.com/kadirahq/storybook-addon-links) are built in by default.
* [Notes](https://github.com/kadirahq/storybook-addon-notes)
* [Specs](https://github.com/mthuret/storybook-addon-specifications) (needs additional setup w/ Jest or Enzyme)
* [Knobs](https://github.com/kadirahq/storybook-addon-knobs)
* [Backgrounds](https://github.com/NewSpring/react-storybook-addon-backgrounds)
* [Options](https://github.com/kadirahq/storybook-addon-options)
* [Info](https://github.com/kadirahq/react-storybook-addon-info)

### To Do
- [ ] Configure testing environment / mocks with Specs addon
- [ ] Better documentation and use cases
