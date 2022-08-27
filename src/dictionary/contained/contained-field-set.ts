import { INumericKeyed } from '../../collections/collection'
import { Dictionary } from '../../collections'
import { ContainedComponentField } from './contained-component-field'
import { ContainedField } from './contained-field'
import { ContainedGroupField } from './contained-group-field'
import { ContainedSimpleField } from './contained-simple-field'
import { ElasticBuffer } from '../../buffer/elastic-buffer'
import { ContainedFieldType } from './contained-field-type'
import { TagType } from '../../buffer/tag/tag-type'
import { ContainedSetType } from '../contained-set-type'

export abstract class ContainedFieldSet {
  public readonly groups: Dictionary<ContainedGroupField> = new Dictionary<ContainedGroupField>()
  public readonly components: Dictionary<ContainedComponentField> = new Dictionary<ContainedComponentField>()
  public readonly simple: Dictionary<ContainedSimpleField> = new Dictionary<ContainedSimpleField>()
    // sequence of fields representing this type - can be simple, group or component
  public readonly fields: ContainedField[] = []
    // any tag at any level i.e. does this set contain a tag
  public readonly containedTag: INumericKeyed<boolean> = {}
    // any tag at any level ordered ie. all tags flattened to list
  public readonly flattenedTag: number[] = []
    // any data tags contained length within this set.
  public readonly containedLength: INumericKeyed<boolean> = {}
    // tags only in repository at this level, not from any at deeper levels
  public readonly localTag: INumericKeyed<ContainedSimpleField> = {}
  // tags marked required at this level only
  public readonly localRequired: INumericKeyed<ContainedSimpleField> = {}
    // all tags contained within this field set flattened from all levels
  public readonly tagToSimple: INumericKeyed<ContainedSimpleField> = {}
    // direct any tag contained within this set to field one level down where it belongs.
  public readonly tagToField: INumericKeyed<ContainedField> = {}
    // only repository directly in this set indexed by name
  public readonly localNameToField: Dictionary<ContainedField> = new Dictionary<ContainedField>()
    // for FixMl notation this set of fields appear as attributes i.e. <Pty ID="323" R="38">
  public readonly nameToLocalAttribute: Dictionary<ContainedSimpleField> = new Dictionary<ContainedSimpleField>()
    // all attributes in order of being declared
  public readonly localAttribute: ContainedSimpleField[] = []
    // at any level on this set, first declared simple field
  public firstSimple: ContainedSimpleField
    // parser needs to know about raw fields
  public containsRaw: boolean = false

  protected constructor (public readonly type: ContainedSetType,
               public readonly name: string,
               public readonly category: string,
               public readonly abbreviation: string,
               public readonly description: string) {
  }

  public toString () {
    const buffer = new ElasticBuffer(2 * 1024)
    const fields = this.fields
    buffer.writeString(`Set: ${this.name}(${this.getPrefix()}) fields [${fields.length}]: `)
    const set = fields.map(f => f.toString())
    const s = set.join(', ')
    buffer.writeString(s)
    return buffer.toString()
  }

  public abstract getPrefix (): string

  public getFieldName (tag: number) {
    const s = this.tagToSimple[tag]
    if (s == null) {
      const gf = this.tagToField[tag] as ContainedGroupField
      if (gf !== null) {
        return `${gf.definition.name}`
      }
      return `${tag}`
    }
    return s.name
  }

  public add (field: ContainedField): void {
    this.fields.push(field)
    this.localNameToField.addUpdate(field.name, field)
    this.addUpdate(field)
    this.addContained(this, field)
  }

  private addUpdate (field: ContainedField): void {
    switch (field.type) {
      case ContainedFieldType.Simple: {
        this.addLocalSimple(field as ContainedSimpleField)
        break
      }

      case ContainedFieldType.Component: {
        const cf = field as ContainedComponentField
        const definition = cf.definition
        if (definition.abbreviation && definition.abbreviation !== field.name) {
          this.localNameToField.addUpdate(definition.abbreviation, field)
        }
        break
      }

      case ContainedFieldType.Group: {
        const gf = field as ContainedComponentField
        const definition = gf.definition
        if (definition.abbreviation && definition.abbreviation !== field.name) {
          this.localNameToField.addUpdate(definition.abbreviation, field)
        }
        break
      }

      default:
        throw new Error(`unknown field type ${field.type}`)
    }
  }

  private addLocalSimple (field: ContainedSimpleField) {
    const definition = field.definition
    if (definition.abbreviation && definition.abbreviation !== definition.name) {
      this.localNameToField.addUpdate(definition.abbreviation, field)
    }
    if (definition.baseCategoryAbbreviation && definition.baseCategory === this.category) {
      this.localNameToField.addUpdate(definition.baseCategoryAbbreviation, field)
    }
    if (field.attribute) {
      this.nameToLocalAttribute.addUpdate(definition.abbreviation, field)
      this.localAttribute.push(field)
      // an attribute for FixMl lives in attribute set not fields - in this case xml sub elements
      this.fields.pop()
    }
    const tag = definition.tag
    this.localTag[tag] = field
    if (field.required) {
      this.localRequired[tag] = field
    }
  }

  private addContained (parent: ContainedFieldSet, field: ContainedField): void {
    switch (field.type) {
      case ContainedFieldType.Group: {
        this.addGroupFieldDef(field as ContainedGroupField)
        break
      }

      case ContainedFieldType.Component: {
        this.addComponentFieldDef(field as ContainedComponentField)
        break
      }

      case ContainedFieldType.Simple: {
        this.addSimpleFieldDef(parent, field as ContainedSimpleField)
        break
      }

      default:
        throw new Error(`unknown field type ${field.type}`)
    }
  }

  private addAllFields (containedField: ContainedFieldSet): void {
    containedField.fields.forEach((f: ContainedField) => {
      this.addContained(containedField, f)
    })
  }

  private addGroupFieldDef (groupField: ContainedGroupField): void {
    if (this.groups.containsKey(groupField.name)) {
      return
    }
    const definition = groupField.definition
    this.groups.add(groupField.name, groupField)
    const nof = definition.noOfField
    if (nof) {
      const tag = nof.tag
      this.containedTag[tag] = true
      this.flattenedTag.push(tag)
    }
    this.addAllFields(definition)
    this.mapAllBelow(definition, groupField)
  }

  private addComponentFieldDef (componentField: ContainedComponentField): void {
    const components = this.components
    if (components.containsKey(componentField.name)) {
      return
    }
    const definition = componentField.definition
    components.add(componentField.name, componentField)
    this.addAllFields(definition)
    this.mapAllBelow(definition, componentField)
  }

  private keys (): number[] {
    const keys: string[] = Object.keys(this.containedTag)
    const nums: number[] = new Array(keys.length)
    for (let j: number = 0; j < keys.length; ++j) {
      nums[j] = parseInt(keys[j], 10)
    }
    return nums
  }

  private mapAllBelow (set: ContainedFieldSet, field: ContainedField): void {
        // point all tags in this component to this field.
    const tagsBelow: number[] = set.keys()
    for (const t of tagsBelow) {
      this.tagToField[t] = field
    }
  }

  private addSimpleFieldDef (parent: ContainedFieldSet, field: ContainedSimpleField): void {
    if (this.simple.containsKey(field.name)) {
      return
    }
    if (!this.firstSimple) {
      this.firstSimple = field
    }
    switch (field.definition.tagType) {
      case TagType.RawData: {
        const dataLengthField: ContainedSimpleField = parent.fields[field.position - 1] as ContainedSimpleField
        if (dataLengthField && dataLengthField.definition.tagType === TagType.Length) {
          this.containedLength[dataLengthField.definition.tag] = true
          this.containsRaw = true
        }
        break
      }
      default:
        break
    }
    const tag = field.definition.tag
    this.simple.add(field.name, field)
    this.containedTag[tag] = true
    this.flattenedTag.push(tag)
    this.tagToSimple[tag] = field
  }
}
