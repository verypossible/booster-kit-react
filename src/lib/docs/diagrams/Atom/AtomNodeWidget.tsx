import * as React from 'react'
import { PortWidget } from 'storm-react-diagrams'

import { AtomNodeModel } from './AtomNodeModel'

export interface AtomNodeWidgetProps {
  node: AtomNodeModel,
  size?: number
}

/**
 * @author Dylan Vorster
 */
export class AtomNodeWidget extends React.Component<AtomNodeWidgetProps> {
  public static defaultProps: AtomNodeWidgetProps = {
    node: null,
    size: 150
  }

  constructor (props: AtomNodeWidgetProps) {
    super(props)
    this.state = {}
  }

  public render () {
    const { size, color } = this.props.node.props
    return (
      <div className={'atom-node'} style={{position: 'relative', width: size, height: size}}>
        <svg
          width={size}
          height={size}
          dangerouslySetInnerHTML={{__html: `
            <g id='Layer_1'>
              <circle cx='12' cy='12' r=${size} fill=${color} />
            </g>

				`}} />
        <div style={{position: 'absolute', zIndex: 10, top: size / 2 - 8, left: -8 }}>
          <PortWidget name='left' node={this.props.node} />
        </div>
        <div style={{position: 'absolute', zIndex: 10, left: size / 2 - 8, top: - 8 }}>
          <PortWidget name='top' node={this.props.node} />
        </div>
        <div style={{position: 'absolute', zIndex: 10, left: size - 8, top: size / 2 - 8 }}>
          <PortWidget name='right' node={this.props.node} />
        </div>
        <div style={{position: 'absolute', zIndex: 10, left: size / 2 - 8, top: size - 8}}>
          <PortWidget name='bottom' node={this.props.node} />
        </div>
      </div>
    )
  }
}

export const AtomNodeWidgetFactory = React.createFactory(AtomNodeWidget)
