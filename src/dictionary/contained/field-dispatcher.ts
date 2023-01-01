import { ContainedGroupField } from './contained-group-field'
import { ContainedSimpleField } from './contained-simple-field'
import { ContainedComponentField } from './contained-component-field'

export interface IFieldDispatcher {
  group?: (field: ContainedGroupField) => void
  simple?: (field: ContainedSimpleField) => void
  component?: (field: ContainedComponentField) => void
}
