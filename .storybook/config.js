import { configure, setAddon, addDecorator } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'
import { setOptions } from '@kadira/storybook-addon-options'

import React from 'react'

setAddon(infoAddon)
setOptions({
  name: 'React Booster Kit',
  url: 'http://boosters.joinspartan.com',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
})

const req = require.context('../universal', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
  // You can require as many stories as you need.
}

const CenterDecorator = (story) => (
  <div style={{ display: "flex", justifyContent: "center",  alignItems: "center", margin: "0 0 50px 0" }}>
    {story()}
  </div>
)

addDecorator(CenterDecorator)

configure(loadStories, module)
