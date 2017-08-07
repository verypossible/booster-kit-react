import * as React from 'react'

import { Box, H1 } from 'atoms'

import { getSignature } from '../lib/formatters'
import { toMarkdown } from '../lib/helpers'
import { groupModuleTypes, parseFunctionType } from '../lib/moduleData'

import Function from './Function'
import Icon from './Icon'

interface Props {
  module: {
    name: string,
    parts: object[]
  }
}

interface State {
  functions: []
}

class ModuleWrapper extends React.Component<Props, {}> {
  public componentWillMount () {
    if (this.props.module) {
      this.getData(this.props.module)
    }
  }

  public componentWillReceiveProps (next) {
    if (next.module !== this.props.module) {
      this.getData(this.props.module)
    }
  }

  public getData = (module) => {
    const data = groupModuleTypes(module)
      .then((types) => {
        const functions = parseFunctionType(types.Function)
          .then((f) => this.functionProps(f))
          .then((p) => this.setState({ functions: p }))
      })
    return data
  }

  public functionProps = (functions) => {
    return functions.map((f) => ({
      signature: getSignature(f),
      ...f
    }))
  }

  public render () {
    const { module } = this.props
    return (
      <Box margin='large'>
        <H1>{module.name}</H1>
        <Icon icon='variable'>Variable</Icon>
        {this.state && this.state.functions.map((f) => <Function key={f.name} {...f} />)}
      </Box>
    )
  }
}

export default ModuleWrapper
