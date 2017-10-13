import * as React from 'react'

import { errorBoundary } from '../../helpers'
import { ParsedType } from '../../types'

import CodeBlock from './CodeBlock'
import Comment from './Comment'
import Layout from './ItemLayout'
import Params from './Params'
import Sources from './Sources'
import Title from './Title'

const ModuleItem: React.SFC<ParsedType> = ({
  comment,
  kindString,
  flags,
  meta,
  name,
  sources
}) => (
  <Layout>
    <Title flags={flags} name={name} type={kindString} />
    <Sources area='headerRight' sources={sources} />
    {meta.signature && <CodeBlock area='code' code={meta.signature} />}
    {comment && comment.shortText && (
      <Comment area='comment' text={comment.shortText} />
    )}
    {meta.params && <Params params={meta.params} />}
  </Layout>
)

export default errorBoundary(ModuleItem)
