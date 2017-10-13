import visit from './actions/visit'
import { url } from './browser'


describe('When visiting the site', () => {
  test.skip('And viewing the React booster Kit examples, the URL is /docs/examples', async function () {
    let page = visit('/docs/examples')
    let counterLink = await page.evaluate(() => document.querySelector('#counterLink').href)
      .end()
    expect(counterLink).toEqual(`${url}/docs/examples/counter`)
  })

  test.skip('And viewing the counter, the URL is /docs/examples/counter', async function () {
    let page = visit('/docs/examples/counter')
    let destination = await page.url()
      .end()
    expect(destination).toEqual(`${url}/docs/examples/counter`)
  })

  test.skip('When I click increment, the count changes to 1', async function () {
    let page = visit('/docs/examples/counter')
    page.click('#incrementCounter').wait(500)
    let count = await page.evaluate(() => document.querySelector('#count').innerHTML)
      .end()
    expect(count).toEqual('1')
  })

})
