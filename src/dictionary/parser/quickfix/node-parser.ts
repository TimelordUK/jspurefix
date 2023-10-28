import { ContainedGroupField, ContainedSimpleField, ContainedComponentField } from '../../contained'
import { GroupFieldDefinition, SimpleFieldDefinition, ComponentFieldDefinition } from '../../definition'
import { ParseContext } from './parse-context'
import { ISaxNode } from '../../sax-node'
import { ParseProgress } from './parse-progress'

export abstract class NodeParser {
  protected readonly parseContexts: ParseContext[] = []

  protected constructor (protected readonly progress: ParseProgress) {
  }

  public abstract open (line: number, node: ISaxNode): void

  public abstract close (line: number, node: string): void

  protected addSimple (node: ISaxNode): void {
    if (node.isSelfClosing) {
      const parent: ParseContext | null = this.peek()
      if (parent == null) {
        throw new Error(`simple field ${node.name} has no parent on which to add.`)
      }
      const fieldName: string = node.attributes.name
      const fieldDefinition: SimpleFieldDefinition | null = this.progress.definitions.simple.get(fieldName)
      if (fieldDefinition == null) {
        throw new Error(`simple field ${fieldName} has no declaration in dictionary.`)
      }
      const containedField: ContainedSimpleField = new ContainedSimpleField(fieldDefinition,
        parent?.set?.fields?.length ?? 0, node.attributes.required === 'Y', false)
      parent?.set?.add(containedField)
    }
  }

  protected addComponentField (componentName: string, node: ISaxNode): void {
    const parent: ParseContext | null = this.peek()
    if (parent == null) {
      throw new Error(`component ${node.name} has no parent on which to add.`)
    }
    const fieldDef: ComponentFieldDefinition | null = this.progress.definitions.component.get(componentName)
    if (fieldDef != null) {
      const containedField: ContainedComponentField =
                new ContainedComponentField(fieldDef, parent?.set?.fields?.length ?? 0, parent.required)
      parent?.set?.add(containedField)
    } else {
      if (this.progress.numberPasses >= this.progress.maxIterations) {
        throw new Error(`field ${node.name} includes unknown component ${componentName}.`)
      } else {
        this.progress.cacheMisses++
      }
    }
  }

  protected addGroupField (name: string): void {
    const group: ParseContext | null = this.parseContexts.pop() ?? null
    if (group == null) {
      throw new Error(`group field ${name} closes yet does not exist.`)
    }
    const parent: ParseContext | null = this.peek()
    if (parent != null) {
      const asGroup: GroupFieldDefinition | null = group.asGroup()
      if (asGroup) {
        const containedField: ContainedGroupField =
          new ContainedGroupField(asGroup, parent?.set?.fields?.length ?? 0, group.required)
        parent?.set?.add(containedField)
      }
    } else {
      throw new Error(`group field ${group.name} has no parent on which to add.`)
    }
  }

  protected beginGroupDefinition (node: ISaxNode): void {
    if (!node.isSelfClosing) {
      // a group should have a field that matches its name
      const groupName: string = node.attributes.name
      const noOfField: SimpleFieldDefinition | null = this.progress.definitions.simple.get(groupName) ?? null
      if (noOfField == null) {
        const msg: string = `group ${groupName} has no field defined.`
        throw new Error(msg)
      }
      const set: GroupFieldDefinition = new GroupFieldDefinition(groupName, groupName, null, noOfField, null)
      const context: ParseContext = new ParseContext(node.attributes.name, true, set)
      context.required = node.attributes.required === 'Y'
      this.parseContexts.push(context)
    }
  }

  private peek (): ParseContext | null {
    return this.parseContexts.length > 0 ? this.parseContexts[this.parseContexts.length - 1] : null
  }
}
