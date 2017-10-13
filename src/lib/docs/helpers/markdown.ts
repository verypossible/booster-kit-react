import marked from 'marked'
import Prism from 'prismjs'

export default (markup: string) => {
  marked.setOptions({
    breaks: true,
    gfm: true,
    hightlight: code => Prism.highlight(code, Prism.languages.javascript),
    pedantic: false,
    renderer: new marked.Renderer(),
    sanitize: false,
    smartLists: true,
    smartypants: false,
    tables: true
  })

  return marked(markup)
}
