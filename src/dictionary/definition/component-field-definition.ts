import { ContainedFieldSet } from '../contained'
import { ContainedSetType } from '../dict-primitive'

export class ComponentFieldDefinition extends ContainedFieldSet {
  constructor (public readonly name: string,
               public readonly abbreviation: string,
               public readonly category: string,
               public readonly description: string) {
    super(ContainedSetType.Component, name, abbreviation, category, description)
  }

  public getPrefix (): string {
    return `C`
  }
}
