import { ContainedFieldSet } from './contained-field-set'
import { ContainedField } from './contained-field'
import { ContainedFieldType } from './contained-field-type'
import { ContainedSimpleField } from './contained-simple-field'
import { ContainedComponentField } from './contained-component-field'
import { ContainedGroupField } from './contained-group-field'
import { TagType } from '../../buffer/tag/tag-type'
import { IContainedSet } from './contained-set'

export class ContainedSetBuilder {
  public constructor (public set: IContainedSet) {
  }

  /**
   * adds a field to this set - simple, component or group
   * @param field
   */
  public add (field: ContainedField): void {
    this.set.fields.push(field)
    this.set.localNameToField.set(field.name, field)
    this.addUpdate(field)
    this.addContained(this.set, field)
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
          this.set.localNameToField.set(definition.abbreviation, field)
        }
        break
      }

      case ContainedFieldType.Group: {
        const gf = field as ContainedComponentField
        const definition = gf.definition
        if (definition.abbreviation && definition.abbreviation !== field.name) {
          this.set.localNameToField.set(definition.abbreviation, field)
        }
        break
      }

      default:
        throw new Error(`unknown field type ${field.type}`)
    }
  }

  private addLocalSimple (field: ContainedSimpleField): void {
    const definition = field.definition
    if (definition.abbreviation && definition.abbreviation !== definition.name) {
      this.set.localNameToField.set(definition.abbreviation, field)
    }
    if (definition.baseCategoryAbbreviation && definition.baseCategory === this.set.category) {
      this.set.localNameToField.set(definition.baseCategoryAbbreviation, field)
    }
    if (field.attribute) {
      this.set.nameToLocalAttribute.set(definition.abbreviation, field)
      this.set.localAttribute.push(field)
      // an attribute for FixMl lives in attribute set not fields - in this case xml sub elements
      this.set.fields.pop()
    }
    const tag = definition.tag
    this.set.localTag[tag] = field
    if (field.required) {
      this.set.localRequired[tag] = field
    }
  }

  private addContained (parent: IContainedSet, field: ContainedField): void {
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

  private addGroupFieldDef (groupField: ContainedGroupField): void {
    if (this.set.groups.has(groupField.name)) {
      return
    }
    const definition = groupField.definition
    this.set.groups.set(groupField.name, definition)
    const nof = definition.noOfField
    if (nof) {
      const tag = nof.tag
      this.set.containedTag[tag] = true
      this.set.flattenedTag.push(tag)
    }
    this.addAllFields(definition)
    this.mapAllBelow(definition, groupField)
  }

  private addComponentFieldDef (componentField: ContainedComponentField): void {
    const components = this.set.components
    if (components.has(componentField.name)) {
      return
    }
    const definition = componentField.definition
    components.set(componentField.name, definition)
    this.addAllFields(definition)
    this.mapAllBelow(definition, componentField)
  }

  private mapAllBelow (set: ContainedFieldSet, field: ContainedField): void {
    // point all tags in this component to this field.
    const tagsBelow: number[] = set.keys()
    for (const t of tagsBelow) {
      this.set.tagToField[t] = field
    }
  }

  private addSimpleFieldDef (parent: IContainedSet, field: ContainedSimpleField): void {
    if (this.set.simple.has(field.name)) {
      return
    }
    if (!this.set.firstSimple) {
      this.set.firstSimple = field
    }
    switch (field.definition.tagType) {
      case TagType.RawData: {
        const dataLengthField: ContainedSimpleField = parent.fields[field.position - 1] as ContainedSimpleField
        if (dataLengthField && dataLengthField.definition.tagType === TagType.Length) {
          this.set.containedLength[dataLengthField.definition.tag] = true
          this.set.containsRaw = true
        }
        break
      }
      default:
        break
    }
    const tag = field.definition.tag
    this.set.simple.set(field.name, field)
    this.set.containedTag[tag] = true
    this.set.flattenedTag.push(tag)
    this.set.tagToSimple[tag] = field
  }

  private addAllFields (containedField: ContainedFieldSet): void {
    containedField.fields.forEach((f: ContainedField) => {
      this.addContained(containedField, f)
    })
  }
}
