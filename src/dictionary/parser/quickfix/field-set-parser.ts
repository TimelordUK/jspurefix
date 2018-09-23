import { ComponentFieldDefinition } from '../../definition/component-field-definition'
import { ISaxNode } from '../../dict-primitive'
import { NodeParser } from './node-parser'
import { ParseContext } from './parse-context'
import { QuickFixXmlFileParser } from './quick-fix-xml-file-parser'

export class FieldSetParser extends NodeParser {
  constructor (public readonly parser: QuickFixXmlFileParser) {
    super(parser)
  }

  public open (line: number, node: ISaxNode): void {
    switch (node.name) {
      case 'component':
      case 'header':
      case 'trailer': {
        const componentName: string = node.attributes.name || node.name
        if (!node.isSelfClosing) {
          const set: ComponentFieldDefinition = new ComponentFieldDefinition(componentName, componentName, null, null)
          const context: ParseContext = new ParseContext(componentName, true, set)
          this.parseContexts.push(context)
        } else {
          this.addComponentField(componentName, node)
          const context: ParseContext = new ParseContext(componentName, false, null)
          this.parseContexts.push(context)
        }
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
        const latest: ParseContext = this.parseContexts.pop()
        if (latest == null) {
          throw new Error(`component field ${name} closes yet does not exist.`)
        }
        if (!latest.defining) {
          return
        }
        const asComponent: ComponentFieldDefinition = latest.asComponent()
        if (asComponent != null) {
          this.definitions.addComponentFieldDef(asComponent)
        } else {
          throw new Error(`latest not instance of component field ${latest.name} `)
        }

        break
      }
    }
  }
}
