import {
  ContainedField, ContainedFieldSet,
  ContainedGroupField, ContainedSimpleField, ContainedComponentField, ContainedFieldType
} from './contained'
import { ITypeDispatcher } from './type-dispatcher'

export class SetReduce<T> {
  reduceField (a: T, field: ContainedField, dispatcher: ITypeDispatcher<T>): void {
    switch (field.type) {
      case ContainedFieldType.Group: {
        if (dispatcher.group) {
          dispatcher.group(a, field as ContainedGroupField)
        }
        break
      }

      case ContainedFieldType.Simple: {
        if (dispatcher.simple) {
          dispatcher.simple(a, field as ContainedSimpleField)
        }
        break
      }

      case ContainedFieldType.Component: {
        if (dispatcher.component) {
          dispatcher.component(a, field as ContainedComponentField)
        }
        break
      }

      default:
        throw new Error(`unknown type ${field.type}`)
    }
  }

  reduce (def: ContainedFieldSet, dispatcher: ITypeDispatcher<T>, init: T): T {
    return def.fields.reduce((a: any, field: ContainedField) => {
      this.reduceField(a, field, dispatcher)
      return a
    }, init)
  }
}
