import highlight from 'highlight.js'
import marked from 'marked'

export const toMarkdown = (markup: string) => {
  marked.setOptions({
    breaks: false,
    gfm: true,
    hightlight: (code) => highlight.highlightAuto(code).value,
    pedantic: false,
    renderer: new marked.Renderer(),
    sanitize: false,
    smartLists: true,
    smartypants: false,
    tables: true
  })

  return marked(markup)
}
