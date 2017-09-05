import * as SRD from 'storm-react-diagrams'
import { AtomPortModel } from './AtomPortModel'

interface Props {
  color?: string,
  size?: number
}

export class AtomNodeModel extends SRD.NodeModel {
  public props: Props

  constructor (props) {
    super('atom')
    this.props = props

    this.addPort(new AtomPortModel('top'))
    this.addPort(new AtomPortModel('left'))
    this.addPort(new AtomPortModel('bottom'))
    this.addPort(new AtomPortModel('right'))
  }

  public deSerialize (props) {
    this.props = props
  }

  public serialize () {
    return Object.assign(super.serialize(), {
      ...this.props
    })
  }
}
