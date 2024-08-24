import { ContainedFieldSet } from '../contained/contained-field-set'
import { ContainedSetType } from '../contained-set-type'

export class MessageDefinition extends ContainedFieldSet {
  constructor (readonly name: string,
    readonly abbreviation: string,
    public readonly msgType: string,
    readonly category: string,
    readonly description: string | null) {
    super(ContainedSetType.Msg, name, category, abbreviation, description)
  }

  getPrefix (): string {
    return `M.${this.msgType}`
  }
}
