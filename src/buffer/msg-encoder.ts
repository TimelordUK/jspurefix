import { ILooseObject } from '../collections/collection'
import { FixDefinitions } from '../dictionary/definition'
import { IContainedSet } from '../dictionary/contained'
import * as events from 'events'

export abstract class MsgEncoder extends events.EventEmitter {
  protected constructor (public readonly definitions: FixDefinitions) {
    super()
  }

  public encode (o: ILooseObject, name: string): void {
    const set: IContainedSet | undefined = this.definitions.message.get(name) ??
      this.definitions.component.get(name)
    if (!set) {
      return
    }
    this.encodeSet(o, set)
  }

  public abstract reset (): void
  public abstract trim (): Buffer
  public abstract encodeSet (o: ILooseObject, set: IContainedSet): void
}
