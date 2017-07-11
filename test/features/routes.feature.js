import visit from './actions/visit'
import { url } from './browser'


describe('When visiting the site', () => {
  test('And viewing the React booster Kit, the URL is /docs', async function () {
    let page = visit('/docs')
    let counterLink = await page.evaluate(() => document.querySelector('#counterLink').href)
      .end()
    expect(counterLink).toEqual(`${url}/docs/counter`)
  })

  test('And viewing the counter, the URL is /docs/counter', async function () {
    let page = visit('/docs/counter')
    let destination = await page.url()
      .end()
    expect(destination).toEqual(`${url}/docs/counter`)
  })

  test('When I click increment, the count changes to 1', async function () {
    let page = visit('/docs/counter')
    page.click('#incrementCounter')
    let count = await page.evaluate(() => document.body.textContent)
      .end()
    expect(count).toContain(`Counter: 1`)
  })

})
