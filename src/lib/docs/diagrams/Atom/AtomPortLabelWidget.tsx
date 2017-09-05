import * as React from 'react'
import {PortWidget} from 'storm-react-diagrams'

import { AtomPortModel } from './AtomPortModel'

export interface AtomPortLabelProps {
  model?: AtomPortModel
  in?: boolean
  label?: string
}

/**
 * @author Dylan Vorster
 */
export class DefaultPortLabel extends React.Component<AtomPortLabelProps> {

  public static defaultProps: AtomPortLabelProps = {
    in: true,
    label: 'port'
  }

  public render () {
    const port = <PortWidget node={this.props.model.getParent()} name={this.props.model.name} />
    const label = <div className='name'>{this.props.model.label}</div>

    return (
      <div className={`${this.props.model.in ? 'in' : 'out'}-port`}>
        {this.props.model.in ? port : label}
        {this.props.model.in ? label : port}
        </div>
   )
  }
}
