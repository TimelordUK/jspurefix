import { ContainedComponentField, ContainedGroupField, ContainedSimpleField } from './contained'

export interface ITypeDispatcher<T> {
  group?: (a: T, field: ContainedGroupField) => void
  simple?: (a: T, field: ContainedSimpleField) => void
  component?: (a: T, field: ContainedComponentField) => void
}
