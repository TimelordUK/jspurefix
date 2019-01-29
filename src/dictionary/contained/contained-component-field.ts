import { ComponentFieldDefinition } from '../definition'
import { ContainedField, ContainedFieldType } from './contained-field'

export class ContainedComponentField extends ContainedField {
  constructor (public readonly definition: ComponentFieldDefinition,
               public position: number,
               public readonly required: boolean,
               public readonly override?: string) {
    super(override || definition.name, position, ContainedFieldType.Component, required)
  }
  public toString (): string {
    return `[${this.position}]=C.${this.definition.fields.length} (${this.name})`
  }
}
