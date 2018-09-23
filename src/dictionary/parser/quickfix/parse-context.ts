import { ComponentFieldDefinition } from '../../definition/component-field-definition'
import { ContainedFieldSet } from '../../contained/contained-field-set'
import { GroupFieldDefinition } from '../../definition/group-field-definition'
import { MessageDefinition } from '../../definition/message-definition'

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
