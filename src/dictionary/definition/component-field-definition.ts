import { ContainedFieldSet } from '../contained/contained-field-set'
import { ContainedSetType } from '../contained-set-type'

export class ComponentFieldDefinition extends ContainedFieldSet {
  constructor (public readonly name: string,
    public readonly abbreviation: string,
    public readonly category: string | null,
    public readonly description: string | null) {
    super(ContainedSetType.Component, name, abbreviation, category, description)
  }

  public getPrefix (): string {
    return 'C'
  }
}
