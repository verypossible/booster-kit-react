/* eslint-disable */
import { browser } from '../browser/config'

describe('Browser test yahoo search results', () => {
  it('should find the nightmare github link first', async (done) => {
    await browser
      .goto('http://yahoo.com')
      .type('form[action*="/search"] [name=p]', 'github nightmare')
      .click('form[action*="/search"] [type=submit]')
      .wait('#main')
      .evaluate(function () {
        return document.querySelector('#web .searchCenterMiddle .first a').href
      })
      .end()
      .then(function (link) {
        expect(link).toEqual('https://github.com/segmentio/nightmare')
        done()
      })
      .catch(function (error) {
        console.error('Search failed:', error)
      })
  })
})
