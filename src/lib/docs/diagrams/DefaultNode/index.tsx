import * as React from 'react'
import {
  DefaultLinkFactory,
  DefaultNodeFactory,
  DefaultNodeModel,
  DefaultPortModel,
  DiagramEngine,
  DiagramModel,
  DiagramWidget,
  LinkModel
} from 'storm-react-diagrams'

export default () => {

  // setup the diagram engine
  const engine = new DiagramEngine()
  engine.registerNodeFactory(new DefaultNodeFactory())
  engine.registerLinkFactory(new DefaultLinkFactory())

  // setup the diagram model
  const model = new DiagramModel()

  // create a default node
  const node1 = new DefaultNodeModel('UI', 'rgb(0,192,255)')
  const port1 = node1.addPort(new DefaultPortModel(false, 'out-1', ''))
  node1.x = 100
  node1.y = 100

  // create another default node
  const node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)')
  const port2 = node2.addPort(new DefaultPortModel(true, 'in-1', 'IN'))
  node2.x = 400
  node2.y = 100

  // link the 2 nodes together
  const link1 = new LinkModel()
  link1.setSourcePort(port1)
  link1.setTargetPort(port2)

  // add the models to the root graph
  model.addNode(node1)
  model.addNode(node2)
  model.addLink(link1)

  // load model into engine
  engine.setDiagramModel(model)

  // render the diagram!
  return <DiagramWidget diagramEngine={engine} />

}
