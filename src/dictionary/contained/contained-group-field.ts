import { ContainedField, ContainedFieldType } from './contained-field'
import { GroupFieldDefinition } from '../definition'

export class ContainedGroupField extends ContainedField {
  constructor (public readonly definition: GroupFieldDefinition,
               public readonly position: number,
               public readonly required: boolean,
               public readonly override?: string) {
    super(override || definition.name, position, ContainedFieldType.Group, required)
  }

  public toString (): string {
    const definition = this.definition
    if (!definition) {
      return ''
    }
    const tag = definition.noOfField ? definition.noOfField.tag : -1
    return `[${this.position}]=G.${this.definition.fields.length}(0=${tag})(${this.name})`
  }
}
