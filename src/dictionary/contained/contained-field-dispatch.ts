import { ContainedGroupField } from './contained-group-field'
import { ContainedSimpleField } from './contained-simple-field'
import { ContainedComponentField } from './contained-component-field'
import { ContainedField, ContainedFieldType } from './contained-field'

export interface IContainedFieldDispatcher {
  group?: { (field: ContainedGroupField): void }
  simple?: { (field: ContainedSimpleField): void }
  component?: { (field: ContainedComponentField): void }
}

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
