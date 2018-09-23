import { ContainedField, ContainedFieldType } from './contained-field'
import { GroupFieldDefinition } from '../definition/group-field-definition'

export class ContainedGroupField extends ContainedField {
  constructor (public readonly definition: GroupFieldDefinition,
               public readonly position: number,
               public readonly required: boolean,
               public readonly override?: string) {
    super(override || definition.name, position, ContainedFieldType.Group, required)
  }

  public toString (): string {
    return `[${this.position}]=G.${this.definition.fields.length}(0=${this.definition.noOfField.tag})(${this.name})`
  }
}
