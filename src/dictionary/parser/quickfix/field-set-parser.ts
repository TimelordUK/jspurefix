import { ComponentFieldDefinition } from '../../definition'
import { NodeParser } from './node-parser'
import { ParseContext } from './parse-context'
import { ISaxNode } from '../../sax-node'
import { ParseProgress } from './parse-progress'

export class FieldSetParser extends NodeParser {
  constructor (protected readonly progress: ParseProgress) {
    super(progress)
  }

  private expandName (componentName: string): string {
    switch (componentName) {
      case 'header': {
        return 'StandardHeader'
      }

      case 'trailer': {
        return 'StandardTrailer'
      }

      default:
        return componentName
    }
  }

  public open (line: number, node: ISaxNode): void {
    switch (node.name) {
      case 'component':
      case 'header':
      case 'trailer': {
        const componentName: string = node.attributes.name || node.name
        const fullName = this.expandName(componentName)
        if (!node.isSelfClosing) {
          const set: ComponentFieldDefinition = new ComponentFieldDefinition(fullName, componentName, null, null)
          const context: ParseContext = new ParseContext(fullName, true, set)
          this.startContext(context)
        } else {
          this.addComponentField(fullName, node)
          const context: ParseContext = new ParseContext(fullName, false, null)
          this.startContext(context)
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
        const latest: ParseContext | null = this.parseContexts.pop() ?? null
        if (latest == null) {
          throw new Error(`component field ${name} closes yet does not exist.`)
        }
        if (!latest.defining) {
          return
        }
        const asComponent: ComponentFieldDefinition | null = latest.asComponent() ?? null
        if (asComponent != null) {
          this.progress.newDefines++
          this.progress.definitions.addComponentFieldDef(asComponent)
        } else {
          throw new Error(`latest not instance of component field ${latest.name} `)
        }

        break
      }
    }
  }
}
