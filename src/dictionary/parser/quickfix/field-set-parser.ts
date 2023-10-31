import { NodeParser } from './node-parser'
import { ISaxNode } from '../../sax-node'
import { ParseProgress } from './parse-progress'

export class FieldSetParser extends NodeParser {
  constructor (protected readonly progress: ParseProgress) {
    super(progress)
  }

  public open (line: number, node: ISaxNode): void {
    switch (node.name) {
      case 'component':
      case 'header':
      case 'trailer': {
        this.beginComponentDefinition(node)
        break
      }

      case 'field': {
        this.addSimple(node)
        break
      }

      case 'group': {
        this.beginGroupDefinition(node)
        break
      }
    }
  }

  public close (line: number, name: string): void {
    switch (name) {
      case 'group': {
        this.addGroupField(name)
        break
      }

      case 'component':
      case 'header':
      case 'trailer': {
        this.addComponentDefinition(name)
        break
      }
    }
  }
}
