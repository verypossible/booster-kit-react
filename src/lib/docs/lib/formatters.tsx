import * as React from 'react'

import { toMarkdown } from './helpers'

export function getSignature ({ name, args, returns }) {
  const method = `${name} (${args}): ${returns.name}`
  const markup = `<code>${
    returns.types ? method.concat('&#60;' + returns.types.map((t) => t) + '&#62;') : method
  }</code>`
  const markdown = toMarkdown(markup)
  const html = { __html: markdown }
  return <span key={name} dangerouslySetInnerHTML={html} />
}
