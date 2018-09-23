import { ISaxNode } from '../../dict-primitive'
import { SimpleFieldDefinition } from '../../definition/simple-field-definition'
import { NodeParser } from './node-parser'
import { QuickFixXmlFileParser } from './quick-fix-xml-file-parser'

export class FieldDefinitionParser extends NodeParser {
  private currentField: SimpleFieldDefinition

  constructor (public readonly parser: QuickFixXmlFileParser) {
    super(parser)
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
        this.definitions.addSimpleFieldDef(this.currentField)
        break
      }

      case 'value': {
        this.currentField.addEnum(node.attributes.enum, node.attributes.description)
        break
      }
    }
  }

  public close (line: number, name: string): void {
    switch (name) {
    }
  }
}
