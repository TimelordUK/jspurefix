import { ILooseObject } from '../collections/collection'
import { FixDefinitions } from '../dictionary/definition'
import { IContainedSet } from '../dictionary/contained'
import * as events from 'events'

export type UnknownFieldHandler = (fieldName: string, setName: string) => void

export abstract class MsgEncoder extends events.EventEmitter {
  /**
   * Called when an object carries a key the set being encoded has no field for.
   * The key is dropped - it has no tag, so there is nothing to write - and without
   * this hook that happens in complete silence, which is the single most confusing
   * thing about adding a bespoke field.  Every report of "my tag never goes on the
   * wire" (issues #93, #39, #96) is this, and the fix is nearly always a dictionary
   * that does not declare the field on that message.
   */
  public onUnknownField: UnknownFieldHandler | null = null

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
