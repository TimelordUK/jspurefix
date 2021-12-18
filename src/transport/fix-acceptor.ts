import * as events from 'events'
import { MsgTransport } from './factory/msg-transport'
import { IMsgApplication } from './session-description'
import { INumericKeyed } from '../collections/collection'

export abstract class FixAcceptor extends events.EventEmitter {
  public transports: INumericKeyed<MsgTransport> = {}
  protected constructor (public readonly application: IMsgApplication) {
    super()
  }
  abstract listen (): void
  abstract close (cb: Function): void
}
