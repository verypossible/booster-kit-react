/* eslint-disable */
import { browser, baseUrl } from '../browser/config'

describe('Booster Kit Nav', () => {
  it('should find the react link', async (done) => {
    await browser
      .goto(baseUrl)
      .wait('#header')
      .evaluate(function () {
        return document.querySelector('#react').href
      })
      .end()
      .then(function (link) {
        expect(link).toEqual(`${baseUrl}/react`)
        done()
      })
      .catch(function (error) {
        console.error('Search failed:', error)
      })
  })
})
