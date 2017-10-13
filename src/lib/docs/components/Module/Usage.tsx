import * as React from 'react'

import { errorBoundary } from '../../helpers'
import { ParsedType } from '../../types'

import CodeBlock from './CodeBlock'
import Comment from './Comment'
import Layout from './ItemLayout'
import Title from './Title'

interface Props extends ParsedType {
  importLoc: string
}

const wrapper = (name, params, children, loc) => {
  const propName = `${name.toLowerCase()}Props`
  const makeProps = params.map(p => {
    const type = p.isOptional ? `${p.name}` : `${p.name} [r]`
    return `${type}: ${p.type}`
  })

  const imports = `import ${name} from '${loc}'`
  const inner = children ? (`<${name} {...${propName}}>
       {children}
      </${name}>`) : `<${name} {...${propName}}>`

  return `
    ${imports}

    /** [r] denotes required prop */

    const ${propName} = {
     ${makeProps.map(p => p).join(`,
     `)}
    }

    const YourComponent = () => (
      ${inner}
    )

    export default YourComponent
  `
}

const ModuleUsage: React.SFC<Props> = ({
  comment,
  importLoc,
  kindString,
  flags,
  meta,
  name
}) => {
  const acceptsChildren = meta.params && meta.params.find(p => p.name === 'children')
  const renderExample = !meta.params ? '' : wrapper(name, meta.params, acceptsChildren, importLoc)
  return (
    <Layout>
      <Title flags={flags} name={name} type={kindString} />
      {comment && comment.shortText && (
        <Comment area='comment' text={comment.shortText} />
      )}
      <CodeBlock area='code' code={renderExample} />
    </Layout>
  )
}

export default errorBoundary(ModuleUsage)
