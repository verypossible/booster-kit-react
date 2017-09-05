import * as SRD from 'storm-react-diagrams'

export class AtomPortModel extends SRD.PortModel {
  private position: string | 'top' | 'bottom' | 'left' | 'right'

  constructor (pos: string = 'top') {
    super(pos)
    this.position = pos
  }

  public serialize () {
    return Object.assign(super.serialize(), {
      position: this.position
    })
  }

  public deSerialize (data: any) {
    super.deSerialize(data)
    this.position = data.position
  }
}
