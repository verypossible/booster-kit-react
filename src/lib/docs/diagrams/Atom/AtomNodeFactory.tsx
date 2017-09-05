import * as SRD from 'storm-react-diagrams'
import { AtomNodeModel } from './AtomNodeModel'

export class AtomNodeFactory extends SRD.AbstractInstanceFactory<AtomNodeModel> {
  public props: any
  constructor (props) {
    super('AtomNodeModel')
    this.props = props
  }

  public getInstance () {
    return new AtomNodeModel(this.props)
  }
}
