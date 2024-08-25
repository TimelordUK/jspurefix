import { ContainedSimpleField } from './contained-simple-field'
import { ContainedField } from './contained-field'
import { INumericKeyed } from '../../collections/collection'
import { ContainedSetType } from '../contained-set-type'

export interface IContainedSet {
  /**
   * index of name to any group that may be present within the field list
   */
  readonly groups: Map<string, IContainedSet>
  /**
   * index of name to any component that may be present within the field list
   */
  readonly components: Map<string, IContainedSet>
  /**
   * index of name to any simple field that may be present within the field list
   */
  readonly simple: Map<string, ContainedSimpleField>
  /**
   *  sequence of fields representing this type - can be simple, group or component
   */
  readonly fields: ContainedField[]
  /**
   * any tag at any level i.e. does this set contain a tag
   */
  readonly containedTag: INumericKeyed<boolean>
  /**
   * any tag at any level ordered i.e. all tags flattened to list
   */
  readonly flattenedTag: number[]
  /**
   * any data tags contained length within this set.
   */
  readonly containedLength: INumericKeyed<boolean>
  /**
   * tags only in repository at this level, not from any at deeper levels
   */
  readonly localTag: INumericKeyed<ContainedSimpleField>
  /**
   * tags marked required at this level only
   */
  readonly localRequired: INumericKeyed<ContainedSimpleField>
  /**
   * all tags contained within this field set flattened from all levels
   */
  readonly tagToSimple: INumericKeyed<ContainedSimpleField>
  /**
   * direct any tag contained within this set to field one level down where it belongs.
   */
  readonly tagToField: INumericKeyed<ContainedField>
  /**
   * only repository directly in this set indexed by name
   */
  readonly localNameToField: Map<string, ContainedField>
  /**
   * for FixMl notation this set of fields appear as attributes i.e. <Pty ID="323" R="38">
   */
  readonly nameToLocalAttribute: Map<string, ContainedSimpleField>
  /**
   * all attributes in order of being declared
   */
  readonly localAttribute: ContainedSimpleField[]
  readonly type: ContainedSetType
  readonly name: string
  readonly category: string | null
  readonly abbreviation: string | null
  readonly description: string | null
  /**
   * at any level on this set, first declared simple field
   */
  firstSimple: (ContainedSimpleField | null)
  containsRaw: boolean

  toString: () => string

  getPrefix: () => string

  getFieldName: (tag: number) => string

  getSet: (path: string) => IContainedSet | null

  keys: () => number[]
}
