import { MsgTransport } from './factory'
import { IMsgApplication } from './msg-application'

export abstract class FixInitiator {
  protected constructor (public readonly application: IMsgApplication | null) {
  }

  public abstract connect (timeout: number): Promise<MsgTransport>
  public abstract end (): void
}
