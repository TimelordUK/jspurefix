import { ContainedField } from './contained-field'
import { SimpleFieldDefinition } from '../definition/simple-field-definition'
import { ContainedFieldType } from './contained-field-type'

export class ContainedSimpleField extends ContainedField {
  constructor (public readonly definition: SimpleFieldDefinition,
    public readonly position: number,
    public readonly required: boolean,
    public readonly attribute: boolean,
    public readonly override?: string) {
    super(override ?? definition.name, position, ContainedFieldType.Simple, required)
  }

  public toString (): string {
    return `[${this.position}]=S.${this.definition.tag} (${this.name})`
  }
}
