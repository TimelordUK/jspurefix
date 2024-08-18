import { Dictionary } from '../../collections'
import { ContainedSimpleField } from './contained-simple-field'
import { ContainedField } from './contained-field'
import { INumericKeyed } from '../../collections/collection'
import { ContainedSetType } from '../contained-set-type'

export interface IContainedSet {
  groups: Dictionary<IContainedSet>
  components: Dictionary<IContainedSet>
  simple: Dictionary<ContainedSimpleField>
  fields: ContainedField[]
  containedTag: INumericKeyed<boolean>
  flattenedTag: number[]
  containedLength: INumericKeyed<boolean>
  localTag: INumericKeyed<ContainedSimpleField>
  localRequired: INumericKeyed<ContainedSimpleField>
  tagToSimple: INumericKeyed<ContainedSimpleField>
  tagToField: INumericKeyed<ContainedField>
  localNameToField: Dictionary<ContainedField>
  nameToLocalAttribute: Dictionary<ContainedSimpleField>
  localAttribute: ContainedSimpleField[]
  firstSimple: (ContainedSimpleField | null)
  containsRaw: boolean
  readonly type: ContainedSetType
  readonly name: string
  readonly category: string | null
  readonly abbreviation: string | null
  readonly description: string | null

  /**
   * not for generral usage, this partially resets the set such it can be used on a second
   * pass of the xml parser
   */
  reset: () => void

  empty: <T>(arr: T[]) => void

  toString: () => string

  getPrefix: () => string

  getFieldName: (tag: number) => string

  /**
   * adds a field to this set - simple, component or group
   * @param field
   */
  add: (field: ContainedField) => void

  /**
   * recurses down a path to return nested set definitiom of a group or component
   * given in dot notation 'SecListGrp.NoRelatedSym.SecurityTradingRules.BaseTradingRules'
   * @param path in dot notation
   */
  getSet: (path: string) => IContainedSet | null

  addUpdate: (field: ContainedField) => void

  addLocalSimple: (field: ContainedSimpleField) => void

  addContained: (parent: IContainedSet, field: ContainedField) => void

  addAllFields: (containedField: IContainedSet) => void

  addGroupFieldDef: (groupField: IContainedSet) => void

  addComponentFieldDef: (componentField: IContainedSet) => void

  keys: () => number[]

  mapAllBelow: (set: IContainedSet, field: ContainedField) => void

  addSimpleFieldDef: (parent: IContainedSet, field: ContainedSimpleField) => void
}
