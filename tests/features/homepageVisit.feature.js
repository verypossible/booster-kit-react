/* eslint-disable */
import visit from './actions/visit'

describe('When visiting the homepage', () => {
  test('It contains the icon helper text', async function () {
    let page = visit('/')
    let text = await page.evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain("If you don't see an icon below, something is wrong with icon fonts...")
  })

})
