import { FieldEnum } from '../field-enum'
import { Tags } from '../../buffer/tag/tags'
import { AsciiChars } from '../../buffer/ascii/ascii-chars'
import * as _ from 'lodash'
import { TagType } from '../../buffer/tag/tag-type'

export class SimpleFieldDefinition {
  public readonly tag: number
  public readonly tagType: TagType
  public enums: Map<string, FieldEnum>
  public enumVals: Map<string, boolean>

  constructor (public readonly num: string,
    public readonly name: string,
    public readonly abbreviation: string,
    public readonly baseCategory: string | null,
    public readonly baseCategoryAbbreviation: string | null,
    public readonly type: string,
    public readonly description: string | null) {
    this.tag = parseInt(num, 10)
    this.tagType = Tags.toType(type)
  }

  public isEnum (): boolean {
    return this.enums != null
  }

  public containsEnum (key: string): boolean {
    const enums = this.enums
    if (!enums) {
      return false
    }
    return enums.has(key)
  }

  public resolveEnum (key: string): string {
    const enums = this.enums
    if (!enums) {
      return key
    }
    const e: FieldEnum | undefined = enums.get(key)
    if (e) {
      return e.val
    }
    return key
  }

  public patchEnumValue (v: string): string {
    let converted = _.upperFirst(_.camelCase(v))
    const charAtPos = converted.charCodeAt(0)
    const zero: number = AsciiChars.Zero
    const nine: number = AsciiChars.Nine
    const atDigit: boolean = charAtPos >= zero && charAtPos <= nine
    if (atDigit) {
      converted = `E${converted}`
    }
    if (this.enumVals.has(converted)) {
      converted = `${converted}2`
    }
    return converted
  }

  public addEnum (key: string, val: string, description?: string): void {
    let enums = this.enums
    let enumVals = this.enumVals
    if (enums == null) {
      this.enums = enums = new Map<string, FieldEnum>()
      this.enumVals = enumVals = new Map<string, boolean>()
    }
    if (!description) description = val
    val = this.patchEnumValue(val)
    enums.set(key, new FieldEnum(key, val, description ?? ''))
    enumVals.set(val, true)
  }

  public toString (): string {
    let abbreviation: string = ''
    if (this.abbreviation && this.name !== this.abbreviation) {
      abbreviation = `(${this.abbreviation})`
    }
    let baseCategoryAbbreviation: string = ''
    if (this.baseCategoryAbbreviation && this.baseCategoryAbbreviation !== this.name) {
      baseCategoryAbbreviation = this.baseCategoryAbbreviation
    }
    if (baseCategoryAbbreviation.length > 0 && this.baseCategory) {
      baseCategoryAbbreviation = `${this.baseCategory} ${baseCategoryAbbreviation}`
    }
    return `${this.num} ${this.name} ${abbreviation} ${baseCategoryAbbreviation} ${this.type} ${this.description ?? ''} ${this.enums ? `enumerated = [ ${this.enums.toString()} ]` : ''}`
  }
}
