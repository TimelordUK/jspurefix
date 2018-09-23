import { ContainedFieldSet } from './contained/contained-field-set'
import { ContainedField, ContainedFieldType } from './contained/contained-field'
import { ContainedGroupField } from './contained/contained-group-field'
import { ContainedSimpleField } from './contained/contained-simple-field'
import { ContainedComponentField } from './contained/contained-component-field'

export interface ITypeDispatcher<T> {
  group?: { (a: T, field: ContainedGroupField): void }
  simple?: { (a: T, field: ContainedSimpleField): void }
  component?: { (a: T, field: ContainedComponentField): void }
}

function reduceField<T> (a: T, field: ContainedField, dispatcher: ITypeDispatcher<T>): void {
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

export function reduceSet<T> (def: ContainedFieldSet, dispatcher: ITypeDispatcher<T>, init: T): T {
  return def.fields.reduce((a: any, field: ContainedField) => {
    reduceField<T>(a, field, dispatcher)
    return a
  }, init)
}
