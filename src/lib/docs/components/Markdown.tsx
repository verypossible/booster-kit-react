import 'prismjs/themes/prism-tomorrow.css'

import markdownIt from 'markdown-it'
import Prism from 'prismjs'
import * as React from 'react'

interface Props {
  className?: string,
  children: string
}

const aliases = {
  html: 'markup',
  js: 'jsx',
  sh: 'bash'
}

const highlight = (str, lang) => {
  if (!lang) {
    return str
  } else {
    lang = aliases[lang] || lang
    require(`prismjs/components/prism-${lang}.js`)
    if (Prism.languages[lang]) {
      return Prism.highlight(str, Prism.languages[lang])
    } else {
      return str
    }
  }
}

const md = markdownIt({
  highlight,
  html: true,
  linkify: true,
  typographer: true
})

const Markdown: React.SFC<Props> = ({ className, children }) => (
  <div className={className} key={name} dangerouslySetInnerHTML={{ __html: md.render(children) }} />
)

export default Markdown
