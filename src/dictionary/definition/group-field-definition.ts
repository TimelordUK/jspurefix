import { ContainedFieldSet } from '../contained/contained-field-set'
import { SimpleFieldDefinition } from './simple-field-definition'
import { ContainedSetType } from '../contained-set-type'

export class GroupFieldDefinition extends ContainedFieldSet {
  constructor (public readonly name: string,
    public readonly abbreviation: string,
    public readonly category: string | null,
    public readonly noOfField: SimpleFieldDefinition | null,
    public readonly description: string | null) {
    super(ContainedSetType.Group, name, abbreviation, category, description)
    if (this.noOfField) {
      this.containedTag[this.noOfField.tag] = true
    }
  }

  public getPrefix (): string {
    return 'G'
  }
}
