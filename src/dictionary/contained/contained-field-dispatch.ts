import { ContainedGroupField } from './contained-group-field'
import { ContainedSimpleField } from './contained-simple-field'
import { ContainedComponentField } from './contained-component-field'
import { ContainedField } from './contained-field'
import { IContainedFieldDispatcher } from './contained-field-dispatcher'
import { ContainedFieldType } from './contained-field-type'

export function dispatchContainedField (field: ContainedField, dispatcher: IContainedFieldDispatcher): void {
  switch (field.type) {
    case ContainedFieldType.Group: {
      if (dispatcher.group) {
        dispatcher.group(field as ContainedGroupField)
      }
      break
    }

    case ContainedFieldType.Simple: {
      if (dispatcher.simple) {
        dispatcher.simple(field as ContainedSimpleField)
      }
      break
    }

    case ContainedFieldType.Component: {
      if (dispatcher.component) {
        dispatcher.component(field as ContainedComponentField)
      }
      break
    }

    default:
      throw new Error(`unknown type ${field.type}`)
  }
}
