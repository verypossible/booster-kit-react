import hljs from 'highlight.js'
import cheerio from 'cheerio'
import markdownIt from 'markdown-it'

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return '' // use external default escaping
  }
})

module.exports = function (content) {
  this.cacheable()
  const markup = md.render(content)
  const $markup = cheerio.load(markup)
  this.value = {
    markup: $markup.html()
  }
  return `module.exports = ${JSON.stringify($markup.html())}`
}
