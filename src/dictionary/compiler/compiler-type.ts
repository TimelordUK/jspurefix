import { ContainedField, ContainedFieldSet, ContainedGroupField, ContainedComponentField, ContainedFieldType } from '../contained'
import { FixDefinitions } from '../definition'
import { FixDefinitionSource } from '../fix-versions'
import { ContainedSetType } from '../dict-primitive'

import _ = require('lodash')

export class CompilerType {
  public readonly snaked: string
  constructor (public readonly definitions: FixDefinitions, public readonly set: ContainedFieldSet, public readonly qualifiedName: string) {
    const snake = _.snakeCase(this.qualifiedName)
    if (set.type === ContainedSetType.Msg) {
      this.snaked = `./${snake}`
    } else {
      this.snaked = `./set/${snake}`
    }
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
