import { Dictionary } from '../../collections'
import { ContainedSimpleField } from './contained-simple-field'
import { ContainedField } from './contained-field'
import { INumericKeyed } from '../../collections/collection'
import { ContainedSetType } from '../contained-set-type'

export interface IContainedSet {
  readonly groups: Dictionary<IContainedSet>
  readonly components: Dictionary<IContainedSet>
  readonly simple: Dictionary<ContainedSimpleField>
  readonly fields: ContainedField[]
  readonly containedTag: INumericKeyed<boolean>
  readonly flattenedTag: number[]
  readonly containedLength: INumericKeyed<boolean>
  readonly localTag: INumericKeyed<ContainedSimpleField>
  readonly localRequired: INumericKeyed<ContainedSimpleField>
  readonly tagToSimple: INumericKeyed<ContainedSimpleField>
  readonly tagToField: INumericKeyed<ContainedField>
  readonly localNameToField: Dictionary<ContainedField>
  readonly nameToLocalAttribute: Dictionary<ContainedSimpleField>
  readonly localAttribute: ContainedSimpleField[]
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

  toString: () => string

  getPrefix: () => string

  getFieldName: (tag: number) => string

  getSet: (path: string) => IContainedSet | null

  keys: () => number[]
}
