import { ContainedComponentField, ContainedField, ContainedGroupField, ContainedSimpleField } from '../../contained'
import { ComponentFieldDefinition, GroupFieldDefinition, SimpleFieldDefinition } from '../../definition'
import { ParseContext } from './parse-context'
import { ISaxNode } from '../../sax-node'
import { ParseProgress } from './parse-progress'

export abstract class NodeParser {
  protected readonly parseContexts: ParseContext[] = []

  protected constructor (protected readonly progress: ParseProgress) {
  }

  public abstract open (line: number, node: ISaxNode): void

  public abstract close (line: number, node: string): void

  protected addto (context: ParseContext, containedField: ContainedField): void {
    if (context.set != null) {
      this.progress.newAdds++
      context.set.add(containedField)
    } else {
      this.progress.cacheMisses++
    }
  }

  protected fullContextName (): string {
    return this.parseContexts.map(c => c.name).join('.')
  }

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
      const containedField: ContainedSimpleField = this.makeContainedSimple(fieldDefinition, parent, node.attributes.required === 'Y')
      this.addto(parent, containedField)
    }
  }

  protected makeContainedSimple (fieldDefinition: SimpleFieldDefinition, context: ParseContext, required: boolean): ContainedSimpleField {
    return new ContainedSimpleField(fieldDefinition, context?.set?.fields?.length ?? 0, required, false)
  }

  protected makeContainedComponent (fieldDef: ComponentFieldDefinition, context: ParseContext): ContainedComponentField {
    return new ContainedComponentField(fieldDef, context?.set?.fields?.length ?? 0, context.required)
  }

  protected makeContainedGroup (fieldDef: GroupFieldDefinition, context: ParseContext, required: boolean): ContainedGroupField {
    return new ContainedGroupField(fieldDef, context?.set?.fields?.length ?? 0, required)
  }

  protected addComponentField (componentName: string, node: ISaxNode): void {
    const parent: ParseContext | null = this.peek()
    if (parent == null) {
      throw new Error(`component ${node.name} has no parent on which to add.`)
    }
    const fieldDef: ComponentFieldDefinition | null = this.progress.definitions.component.get(componentName)
    if (fieldDef != null) {
      const containedField: ContainedComponentField = this.makeContainedComponent(fieldDef, parent)
      this.addto(parent, containedField)
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
        const containedField: ContainedGroupField = this.makeContainedGroup(asGroup, parent, group.required)
        this.addto(parent, containedField)
      }
    } else {
      throw new Error(`group field ${group.name} has no parent on which to add.`)
    }
  }

  protected beginGroupDefinition (node: ISaxNode): void {
    if (node.isSelfClosing) return
    // a group should have a field that matches its name
    const groupName: string = node.attributes.name
    const noOfField: SimpleFieldDefinition | null = this.progress.definitions.simple.get(groupName) ?? null
    if (noOfField == null) {
      const msg: string = `group ${groupName} has no field defined.`
      throw new Error(msg)
    }
    const fullName = this.fullContextName() + '.' + groupName
    let cached: (GroupFieldDefinition | null) = this.progress.groupDefinitionCache.get(fullName)
    if (!cached) {
      cached = new GroupFieldDefinition(groupName, groupName, null, noOfField, null)
      this.progress.groupDefinitionCache.add(fullName, cached)
    } else {
      cached.reset()
    }
    const context: ParseContext = new ParseContext(node.attributes.name, true, cached)
    context.required = node.attributes.required === 'Y'
    this.startContext(context)
  }

  protected startContext (context: ParseContext): void {
    this.progress.newContexts++
    this.parseContexts.push(context)
  }

  private peek (): ParseContext | null {
    return this.parseContexts.length > 0 ? this.parseContexts[this.parseContexts.length - 1] : null
  }
}
