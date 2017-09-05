import * as SRD from 'storm-react-diagrams'
import { AtomPortModel } from './AtomPortModel'

export class AtomPortFactory extends SRD.AbstractInstanceFactory<AtomPortModel> {
  constructor () {
    super('AtomPortModel')
  }

  public getInstance () {
    return new AtomPortModel()
  }
}
