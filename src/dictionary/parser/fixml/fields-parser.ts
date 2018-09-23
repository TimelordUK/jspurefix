import { ILooseObject } from '../../../collections/collection'
import { ISaxNode } from '../../dict-primitive'
import { Dictionary } from '../../../collections/dictionary'
import { SimpleFieldDefinition } from '../../definition/simple-field-definition'
import { XsdParser } from './xsd-parser'
import { FixDefinitions } from '../../definition/fix-definitions'

interface ISimpleField extends ILooseObject {
  documentation: string
  Protocol: string
  simpleTypeName: string
  name: string
  ComponentType: string,
  Tag: string,
  Type: string
  AbbrName: string
  Category: string
  CategoryAbbrName: string
  enums: Dictionary<string>
  currentEnum: string
}

export class FieldsParser extends XsdParser {

  public constructor (public readonly definitions: FixDefinitions) {
    super(definitions)
  }

  public value (line: number, n: string, v: string): void {
    const current: ISimpleField = this.current as ISimpleField
    switch (n) {
      case 'fm:EnumDoc': {
        current.enums.add(current.currentEnum, v)
        break
      }
      case 'xs:documentation': {
        this.current['documentation'] = v
        break
      }
    }
  }

  public close (line: number, node: string): void {
    const current: ISimpleField = this.current as ISimpleField
    switch (node) {
      case'xs:simpleType': {
        this.data[this.data.length] = current
        break
      }

      case 'xs:schema': {
        this.insertFields()
        break
      }
    }
  }

  public open (line: number, node: ISaxNode): void {
    switch (node.name) {

      case 'xs:simpleType': {
        this.current = {
          simpleTypeName: node.attributes['name']
        } as ISimpleField
        break
      }

      case 'fm:Xref': {
        this.assign(node)
        break
      }

      case 'fm:EnumDoc': {
        if (!this.current.enums) {
          this.current.enums = new Dictionary<string>()
        }
        this.current.currentEnum = node.attributes['value']
        this.pending = node.name
        break
      }

      default:
        this.pending = node.name
    }
  }

  private insertFields (): void {
    this.data.forEach((f: ISimpleField) => {
      const sf: SimpleFieldDefinition = new SimpleFieldDefinition(f.Tag,
        f.name,
        f.AbbrName,
        f.Category,
        f.CategoryAbbrName,
        f.Type,
        f.documentation)
      if (f.enums) {
        f.enums.forEach((k: string, v: string) => {
          sf.addEnum(k, v)
        })
      }

      this.definitions.addSimpleFieldDef(sf)
    })
  }
}
