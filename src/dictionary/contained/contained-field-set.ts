import { INumericKeyed } from '../../collections/collection'
import { ContainedField } from './contained-field'
import { ContainedSimpleField } from './contained-simple-field'
import { ElasticBuffer } from '../../buffer/elastic-buffer'
import { ContainedSetType } from '../contained-set-type'
import { IContainedSet } from './contained-set'

export abstract class ContainedFieldSet implements IContainedSet {
  /**
   * index of name to any group that may be present within the field list
   */
  public readonly groups: Map<string, IContainedSet> = new Map<string, IContainedSet>()
  /**
   * index of name to any component that may be present within the field list
   */
  public readonly components: Map<string, IContainedSet> = new Map<string, IContainedSet>()
  /**
   * index of name to any simple field that may be present within the field list
   */
  public readonly simple: Map<string, ContainedSimpleField> = new Map<string, ContainedSimpleField>()
  /**
   *  sequence of fields representing this type - can be simple, group or component
   */
  public readonly fields: ContainedField[] = []
  /**
   * any tag at any level i.e. does this set contain a tag
   */
  public readonly containedTag: INumericKeyed<boolean> = {}
  /**
   * any tag at any level ordered i.e. all tags flattened to list
   */
  public readonly flattenedTag: number[] = []
  /**
   * any data tags contained length within this set.
   */
  public readonly containedLength: INumericKeyed<boolean> = {}
  /**
   * tags only in repository at this level, not from any at deeper levels
   */
  public readonly localTag: INumericKeyed<ContainedSimpleField> = {}
  /**
   * tags marked required at this level only
   */
  public readonly localRequired: INumericKeyed<ContainedSimpleField> = {}
  /**
   * all tags contained within this field set flattened from all levels
   */
  public readonly tagToSimple: INumericKeyed<ContainedSimpleField> = {}
  /**
   * direct any tag contained within this set to field one level down where it belongs.
   */
  public readonly tagToField: INumericKeyed<ContainedField> = {}
  /**
   * only repository directly in this set indexed by name
   */
  public readonly localNameToField: Map<string, ContainedField> = new Map<string, ContainedField>()
  /**
   * for FixMl notation this set of fields appear as attributes i.e. <Pty ID="323" R="38">
   */
  public readonly nameToLocalAttribute: Map<string, ContainedSimpleField> = new Map<string, ContainedSimpleField>()
  /**
   * all attributes in order of being declared
   */
  public readonly localAttribute: ContainedSimpleField[] = []
  /**
   * at any level on this set, first declared simple field
   */
  public firstSimple: (ContainedSimpleField | null)
  /**
   * parser needs to know about raw fields, any present in this set?
   */
  public containsRaw: boolean = false

  protected constructor (public readonly type: ContainedSetType,
    public readonly name: string,
    public readonly category: string | null,
    public readonly abbreviation: string | null,
    public readonly description: string | null) {
  }

  /**
   * not for generral usage, this partially resets the set such it can be used on a second
   * pass of the xml parser
   */
  public reset (): void {
    this.groups.clear()
    this.components.clear()
    this.simple.clear()
    this.empty(this.fields)
    this.empty(this.flattenedTag)
    this.empty(this.localAttribute)
    this.localNameToField.clear()
  }

  private empty<T> (arr: T[]): void {
    while (arr.length > 0) {
      arr.pop()
    }
  }

  public toString (): string {
    const buffer = new ElasticBuffer(2 * 1024)
    const fields = this.fields
    buffer.writeString(`Set: ${this.name}(${this.getPrefix()}) fields [${fields.length}]: `)
    const set: string[] = fields.map((f: ContainedField) => f.toString())
    const s = set.join(', ')
    buffer.writeString(s)
    return buffer.toString()
  }

  public abstract getPrefix (): string

  public keys (): number[] {
    const keys: string[] = Object.keys(this.containedTag)
    const nums: number[] = new Array(keys.length)
    for (let j: number = 0; j < keys.length; ++j) {
      nums[j] = parseInt(keys[j], 10)
    }
    return nums
  }

  public getFieldName (tag: number): string {
    const s = this.tagToSimple[tag]
    if (s == null) {
      const gf: ContainedField = this.tagToField[tag]
      if (gf !== null) {
        return `${gf.name}`
      }
      return `${tag}`
    }
    return s.name
  }

  /**
   * recurses down a path to return nested set definitiom of a group or component
   * given in dot notation 'SecListGrp.NoRelatedSym.SecurityTradingRules.BaseTradingRules'
   * @param path in dot notation
   */
  public getSet (path: string): (IContainedSet | null) {
    if (!path) return null
    return path.split('.').reduce((set: IContainedSet, next: string): (IContainedSet | null) => {
      return set.groups.get(next) ?? set.components.get(next) ?? null
    }, this)
  }
}
