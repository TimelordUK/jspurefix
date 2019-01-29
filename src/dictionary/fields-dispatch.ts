import { ContainedField, ContainedFieldType, ContainedGroupField, ContainedSimpleField, ContainedComponentField } from './contained'

export interface IFieldDispatcher {
  group?: { (field: ContainedGroupField): void }
  simple?: { (field: ContainedSimpleField): void }
  component?: { (field: ContainedComponentField): void }
}

function dispatchField (field: ContainedField, dispatcher: IFieldDispatcher): void {
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

export function dispatchFields (fields: ContainedField[], dispatcher: IFieldDispatcher): void {
  fields.forEach((field: ContainedField) => {
    dispatchField(field, dispatcher)
  })
}
