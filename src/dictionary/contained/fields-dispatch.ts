import { ContainedGroupField } from './contained-group-field'
import { ContainedSimpleField } from './contained-simple-field'
import { ContainedField } from './contained-field'
import { ContainedComponentField } from './contained-component-field'
import { IFieldDispatcher } from './field-dispatcher'
import { ContainedFieldType } from './contained-field-type'

export class FieldsDispatch {
  dispatchField (field: ContainedField, dispatcher: IFieldDispatcher): void {
    switch (field.type) {
      case ContainedFieldType.Group: {
        if (dispatcher.group) {
          dispatcher.group(field as ContainedGroupField)
        }
        break
      }

      case ContainedFieldType.Simple: {
        if (dispatcher.simple) {
          try {
            dispatcher.simple(field as ContainedSimpleField)
          } catch (ex) {
          }
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

  dispatchFields (fields: ContainedField[], dispatcher: IFieldDispatcher): void {
    fields.forEach((field: ContainedField) => {
      this.dispatchField(field, dispatcher)
    })
  }
}
