import { IContainedSet } from '../../contained'
import { ComponentFieldDefinition, GroupFieldDefinition, MessageDefinition } from '../../definition'

export class ParseContext {
  public required: boolean

  constructor (public name: string, public defining: boolean, public set: IContainedSet | null) {
    this.required = false
  }

  public asMessage (): MessageDefinition | null {
    const res: boolean = this.set != null && this.set instanceof MessageDefinition
    if (res) {
      return (this.set) as MessageDefinition
    } else {
      return null
    }
  }

  public asComponent (): ComponentFieldDefinition | null {
    const res: boolean = this.set != null && this.set instanceof ComponentFieldDefinition
    if (res) {
      return (this.set) as ComponentFieldDefinition
    } else {
      return null
    }
  }

  public asGroup (): GroupFieldDefinition | null {
    const res: boolean = this.set != null && this.set instanceof GroupFieldDefinition
    if (res) {
      return (this.set) as GroupFieldDefinition
    } else {
      return null
    }
  }
}
