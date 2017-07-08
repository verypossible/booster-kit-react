/* eslint-disable */
import visit from './actions/visit'
import { url } from './browser'


describe('When visiting the site', () => {
  test('And viewing the React booster Kit, the URL is /react', async function () {
    let page = visit('/react')
    let destination = await page.url()
    let counterLink = await page.evaluate(() => document.querySelector('#counterLink a').href)
      .end()
    expect(destination).toEqual(`${url}/react`)
    expect(counterLink).toEqual(`${url}/react/counter`)
  })

  test('And viewing the counter, the URL is /react/counter', async function () {
    let page = visit('/react/counter')
    let destination = await page.url()
      .end()
    expect(destination).toEqual(`${url}/react/counter`)
  })

  test('When I click increment, the count changes to 1', async function () {
    let page = visit('/react/counter')
    page.click('#counterIncrement')
    let count = await page.evaluate(() => document.body.textContent)
      .end()
    expect(count).toContain(`Counter: 1`)
  })

})
