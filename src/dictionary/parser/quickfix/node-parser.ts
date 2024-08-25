import {
  ContainedComponentField,
  ContainedField,
  ContainedGroupField,
  ContainedSetBuilder,
  ContainedSimpleField
} from '../../contained'
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
      const builder = new ContainedSetBuilder(context.set)
      builder.add(containedField)
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
      if (!parent) {
        throw new Error(`simple field ${node.name} has no parent on which to add.`)
      }
      const fieldName: string = node.attributes.name
      const fieldDefinition: SimpleFieldDefinition | undefined = this.progress.definitions.simple.get(fieldName)
      if (!fieldDefinition) {
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
    if (!parent) {
      throw new Error(`component ${node.name} has no parent on which to add.`)
    }
    const fieldDef: ComponentFieldDefinition | undefined = this.progress.definitions.component.get(componentName)
    if (fieldDef) {
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

  protected addComponentDefinition (name: string): void {
    const latest: ParseContext | null = this.parseContexts.pop() ?? null
    if (!latest) {
      throw new Error(`component field ${name} closes yet does not exist.`)
    }
    if (!latest.defining) {
      return
    }
    const asComponent: ComponentFieldDefinition | null = latest.asComponent() ?? null
    if (asComponent) {
      this.progress.newDefines++
      this.progress.definitions.addComponentFieldDef(asComponent)
    } else {
      throw new Error(`latest not instance of component field ${latest.name} `)
    }
  }

  protected addGroupField (name: string): void {
    const group: ParseContext | null = this.parseContexts.pop() ?? null
    if (!group) {
      throw new Error(`group field ${name} closes yet does not exist.`)
    }
    const parent: ParseContext | null = this.peek()
    if (parent) {
      const asGroup: GroupFieldDefinition | null = group.asGroup()
      if (asGroup) {
        const containedField: ContainedGroupField = this.makeContainedGroup(asGroup, parent, group.required)
        this.addto(parent, containedField)
      }
    } else {
      throw new Error(`group field ${group.name} has no parent on which to add.`)
    }
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

  protected beginComponentDefinition (node: ISaxNode): void {
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
  }

  protected beginGroupDefinition (node: ISaxNode): void {
    if (node.isSelfClosing) return
    // a group should have a field that matches its name
    const groupName: string = node.attributes.name
    const noOfField: SimpleFieldDefinition | null = this.progress.definitions.simple.get(groupName) ?? null
    if (!noOfField) {
      const msg: string = `group ${groupName} has no field defined.`
      throw new Error(msg)
    }
    const fullQualifiedName = `${this.fullContextName()}.${groupName}`
    let cached: (GroupFieldDefinition | undefined) = this.progress.groupDefinitionCache.get(fullQualifiedName)
    if (!cached) {
      cached = new GroupFieldDefinition(groupName, groupName, null, noOfField, null)
      this.progress.groupDefinitionCache.set(fullQualifiedName, cached)
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
