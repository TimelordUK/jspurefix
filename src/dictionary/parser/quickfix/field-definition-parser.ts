import { SimpleFieldDefinition } from '../../definition'
import { NodeParser } from './node-parser'
import { ISaxNode } from '../../sax-node'
import { ParseProgress } from './parse-progress'

export class FieldDefinitionParser extends NodeParser {
  private currentField: SimpleFieldDefinition
  constructor (protected readonly progress: ParseProgress) {
    super(progress)
  }

  public open (line: number, node: ISaxNode): void {
    switch (node.name) {
      case 'field': {
        this.currentField = new SimpleFieldDefinition(
          node.attributes.number,
          node.attributes.name,
          node.attributes.name,
          null,
          null,
          node.attributes.type,
          null)
        this.progress.definitions.addSimpleFieldDef(this.currentField)
        break
      }

      case 'value': {
        this.currentField.addEnum(node.attributes.enum, node.attributes.description)
        break
      }
    }
  }

  public close (line: number, name: string): void {
  }
}
