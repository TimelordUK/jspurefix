import { ILooseObject } from '../collections/collection'
import { ContainedFieldSet, FixDefinitions } from '../dictionary'
import * as events from 'events'

export abstract class MsgEncoder extends events.EventEmitter {
  protected constructor (public readonly definitions: FixDefinitions) {
    super()
  }

  public encode (o: ILooseObject, name: string): void {
    const set: ContainedFieldSet = this.definitions.message.get(name) || this.definitions.component.get(name)
    if (!set) {
      return
    }
    this.encodeSet(o, set)
  }

  public abstract encodeSet (o: ILooseObject, set: ContainedFieldSet): void
}
