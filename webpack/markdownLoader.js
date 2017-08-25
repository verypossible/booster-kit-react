import markdownIt from 'markdown-it'
import Prism from 'prismjs'

const aliases = {
  'js': 'jsx',
  'html': 'markup',
  'sh': 'bash'
}

const highlight = (str, lang) => {
  if (!lang) {
    return str
  }

  lang = aliases[lang] || lang
  require(`prismjs/components/prism-${lang}.js`)

  if (Prism.languages[lang]) {
    return Prism.highlight(str, Prism.languages[lang])
  }

  return str
}

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight
})

export default function (content) {
  this.cacheable()
  const markup = md.render(content)
  return `module.exports = ${JSON.stringify(markup)}`
}
