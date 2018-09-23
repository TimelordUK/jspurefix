import { ComponentFieldDefinition } from '../../definition/component-field-definition'
import { ContainedComponentField } from '../../contained/contained-component-field'
import { ContainedGroupField } from '../../contained/contained-group-field'
import { ContainedSimpleField } from '../../contained/contained-simple-field'
import { ISaxNode } from '../../dict-primitive'
import { FixDefinitions } from '../../definition/fix-definitions'
import { GroupFieldDefinition } from '../../definition/group-field-definition'
import { SimpleFieldDefinition } from '../../definition/simple-field-definition'
import { ParseContext } from './parse-context'
import { QuickFixXmlFileParser } from './quick-fix-xml-file-parser'

export abstract class NodeParser {
  protected readonly parseContexts: ParseContext[] = []
  protected readonly definitions: FixDefinitions

  protected constructor (public readonly parser: QuickFixXmlFileParser) {
    this.definitions = parser.definitions
  }

  public abstract open (line: number, node: ISaxNode): void

  public abstract close (line: number, node: string): void

  protected addSimple (node: ISaxNode): void {
    if (node.isSelfClosing) {
      const parent: ParseContext = this.peek()
      if (parent == null) {
        throw new Error(`simple field ${node.name} has no parent on which to add.`)
      }
      const fieldName: string = node.attributes.name
      const fieldDefinition: SimpleFieldDefinition = this.definitions.simple.get(fieldName)
      if (fieldDefinition == null) {
        throw new Error(`simple field ${fieldName} has no declaration in dictionary.`)
      }
      const containedField: ContainedSimpleField = new ContainedSimpleField(fieldDefinition,
                parent.set.fields.length, node.attributes.required === 'Y', false)
      parent.set.add(containedField)
    }
  }

  protected addComponentField (componentName: string, node: ISaxNode): void {
    const parent: ParseContext = this.peek()
    if (parent == null) {
      throw new Error(`component ${node.name} has no parent on which to add.`)
    }
    const fieldDef: ComponentFieldDefinition = this.definitions.component.get(componentName)
    if (fieldDef != null) {
      const containedField: ContainedComponentField =
                new ContainedComponentField(fieldDef, parent.set.fields.length, parent.required)
      parent.set.add(containedField)
    } else {
      if (this.parser.numberPasses >= 4) {
        throw new Error(`field ${node.name} includes unknown component ${componentName}.`)
      }
    }
  }

  protected addGroupField (name: string): void {
    const group: ParseContext = this.parseContexts.pop()
    if (group == null) {
      throw new Error(`group field ${name} closes yet does not exist.`)
    }
    const parent: ParseContext = this.peek()
    if (parent != null) {
      const asGroup: GroupFieldDefinition = group.asGroup()
      const containedField: ContainedGroupField =
                new ContainedGroupField(asGroup, parent.set.fields.length, group.required)
      parent.set.add(containedField)
    } else {
      throw new Error(`group field ${group.name} has no parent on which to add.`)
    }
  }

  protected beginGroupDefinition (node: ISaxNode): void {
    if (!node.isSelfClosing) {
            // a group should have a field that matches its name
      const groupName: string = node.attributes.name
      const noOfField: SimpleFieldDefinition = this.definitions.simple.get(groupName)
      if (noOfField == null) {
        const msg: string = `group ${groupName} has no field defined.`
        throw new Error(msg)
      }
      const set: GroupFieldDefinition = new GroupFieldDefinition(groupName, groupName, null, noOfField,null)
      const context: ParseContext = new ParseContext(node.attributes.name, true, set)
      context.required = node.attributes.required === 'Y'
      this.parseContexts.push(context)
    }
  }

  private peek (): ParseContext {
    return this.parseContexts.length > 0 ? this.parseContexts[this.parseContexts.length - 1] : null
  }
}
