import { ContainedFieldSet } from '../contained/contained-field-set'
import { ContainedField, ContainedFieldType } from '../contained/contained-field'
import { FixDefinitions } from '../definition/fix-definitions'
import { FixDefinitionSource } from '../fix-versions'
import { ContainedGroupField } from '../contained/contained-group-field'
import { ContainedComponentField } from '../contained/contained-component-field'

export class CompilerType {
  constructor (public definitions: FixDefinitions, public set: ContainedFieldSet, public qualifiedName: string) {
  }

  public getExtended (field: ContainedField): string {
    switch (field.type) {
      case ContainedFieldType.Group: {
        const gf = field as ContainedGroupField
        switch (this.definitions.source) {
          case FixDefinitionSource.QuickFix: {
            return this.qualifiedName + field.name
          }

          case FixDefinitionSource.FixmlRepo: {
            return gf.definition.name
          }
          default: {
            return field.name
          }
        }
      }

      case ContainedFieldType.Component: {
        const cf = field as ContainedComponentField
        switch (this.definitions.source) {
          case FixDefinitionSource.FixmlRepo: {
            return cf.definition.name
          }
          default: {
            return field.name
          }
        }
      }

      default:
        return field.name
    }
  }

  public getFieldGroupName (field: ContainedField) {
    switch (field.type) {
      case ContainedFieldType.Group: {
        const gf = field as ContainedGroupField
        switch (this.definitions.source) {
          case FixDefinitionSource.FixmlRepo: {
            return gf.definition.name
          }
          default: {
            return field.name
          }
        }
      }
      default:
        return field.name
    }
  }
}
