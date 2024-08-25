import { IJsFixConfig, IJsFixLogger } from '../../../config'
import { TcpAcceptorListener } from '../../../transport/tcp'
import { inject, injectable } from 'tsyringe'
import { FixEntity, FixSession } from '../../../transport'
import { MsgView } from '../../../buffer'
import { MsgTransport } from '../../../transport/factory'
import { ILooseObject } from '../../../collections/collection'

@injectable()
export class RespawnAcceptor extends FixEntity {
  private readonly logger: IJsFixLogger
  private readonly sessions: Map<string, FixSession> = new Map<string, FixSession>()

  constructor (@inject('IJsFixConfig') public readonly config: IJsFixConfig) {
    super(config)
    this.logger = config.logFactory.logger('RespawnAcceptor')
  }

  // if acceptor errors e.g. via a forced connection drop, then respawn
  // a set number of times.

  public async start (): Promise<any> {
    return await this.waitFor()
  }

  protected rxOnMsg (session: FixSession, msgType: string, view: MsgView): void {
    this.logger.info(`rxOnMsg msgType = ${msgType}`)
    const o: ILooseObject = view.toObject() as ILooseObject
    const key: string = o.StandardHeader.SenderCompID
    if (!this.sessions.has(key)) {
      this.logger.info(`onSession: new session acceptor SenderCompID = ${key} created, count = ${this.sessions.size}}`)
      this.sessions.set(key, session)
    }
  }

  private resetSessionSeqNo (session: FixSession): void {
    const key = this.config.description.TargetCompID
    if (this.sessions.has(key)) {
      const lastSession = this.sessions.get(key)
      const lastPeerSeqNum = lastSession?.lastPeerSeqNum() ?? 0
      this.logger.info(`resetSessionSeqNo: set lastPeerSeqNum ${lastPeerSeqNum} for key ${key}`)
      session.reset(lastPeerSeqNum)
      this.sessions.delete(key)
    }
  }

  private resetLastSentSeqNo (): void {
    if (!this.resetSeqNo()) {
      const key = this.config.description.TargetCompID
      if (this.sessions.has(key)) {
        const lastSession = this.sessions.get(key)
        const lastSentSeqNum = lastSession?.lastSentSeqNum() ?? 0
        this.logger.info(`resetLastSentSeqNo: set seqNo ${lastSentSeqNum} for key ${key}`)
        this.config.description.LastSentSeqNum = lastSentSeqNum
      }
    }
  }

  private onSession (session: FixSession, transport: MsgTransport): void {
    this.resetSessionSeqNo(session)
    const rx = transport.receiver
    rx?.on('msg', (msgType: string, view: MsgView) => { this.rxOnMsg(session, msgType, view) })
  }

  private subscribe (listener: TcpAcceptorListener): void {
    listener.on('session', (s, transport) => { this.onSession(s, transport) })
  }

  /*
  private unsubscribe (listener: TcpAcceptorListener): void {
    listener.removeListener('session', this.onSession)
  }
  */

  private resetSeqNo (): boolean {
    return this.config.description.ResetSeqNumFlag
  }

  public async waitFor (respawns: number = 1): Promise<any> {
    return await new Promise<any>(async (resolve, reject) => {
      let respawned = 0
      while (respawned <= respawns) {
        try {
          const sessionContainer = this.config.sessionContainer
          // if previously running a session then retrieve its last state
          // as need to adjust seqNo if not resetting.
          this.resetLastSentSeqNo()
          const listener = sessionContainer.resolve<TcpAcceptorListener>(TcpAcceptorListener)
          this.subscribe(listener)
          const dropConnectionTimeout = respawned === 0 ? 5 : -1
          sessionContainer.register('dropConnectionTimeout', { useValue: dropConnectionTimeout })
          this.logger.info(`waitFor: waiting for acceptor respawned = ${respawned}`)
          await listener.start()
          break
        } catch (e) {
          this.logger.info(`waitFor: error in acceptor respawned = ${respawned}`)
        }
        ++respawned
      }
      if (respawned > 0) {
        this.logger.info(`acceptor respawned reject = ${respawned}`)
        reject(respawned)
      } else {
        this.logger.info(`resolve = ${respawned}`)
        resolve(respawned)
      }
    })
  }
}
