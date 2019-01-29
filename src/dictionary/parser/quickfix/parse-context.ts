import { ContainedFieldSet } from '../../contained'
import { ComponentFieldDefinition, GroupFieldDefinition, MessageDefinition } from '../../definition'

export class ParseContext {
  public required: boolean

  constructor (public name: string, public defining: boolean, public set: ContainedFieldSet) {
    this.required = false
  }

  public asMessage (): MessageDefinition {
    const res: boolean = this.set != null && this.set instanceof MessageDefinition
    if (res) {
      return (this.set) as MessageDefinition
    } else {
      return null
    }
  }

  public asComponent (): ComponentFieldDefinition {
    const res: boolean = this.set != null && this.set instanceof ComponentFieldDefinition
    if (res) {
      return (this.set) as ComponentFieldDefinition
    } else {
      return null
    }
  }

  public asGroup (): GroupFieldDefinition {
    const res: boolean = this.set != null && this.set instanceof GroupFieldDefinition
    if (res) {
      return (this.set) as GroupFieldDefinition
    } else {
      return null
    }
  }
}
