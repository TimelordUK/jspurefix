import * as events from 'events'
import { MsgTransport } from './factory'
import { INumericKeyed } from '../collections/collection'
import { IMsgApplication } from './msg-application'

export abstract class FixAcceptor extends events.EventEmitter {
  public transports: INumericKeyed<MsgTransport> = {}
  protected constructor (public readonly application: IMsgApplication | null) {
    super()
  }
  abstract listen (): void
  abstract close (cb?: Function): void
}
