import * as React from 'react'
import * as SRD from 'storm-react-diagrams'
import { AtomNodeWidgetFactory } from './AtomNodeWidget'

export class AtomWidgetFactory extends SRD.NodeWidgetFactory {
  constructor () {
    super('atom')
  }

  public generateReactWidget = (_, node: SRD.NodeModel): JSX.Element => AtomNodeWidgetFactory({ node })
}
