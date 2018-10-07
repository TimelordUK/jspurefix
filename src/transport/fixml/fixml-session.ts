import { SessionState } from '../fix-session-state'
import { MsgTransport } from '../msg-transport'
import { IJsFixConfig } from '../../config/js-fix-config'
import { MsgView } from '../../buffer/msg-view'
import { SegmentType } from '../../buffer/segment-description'
import { ElasticBuffer } from '../../buffer/elastic-buffer'
import { UserRequestType, UserStatus } from '../../types/FIXML50SP2/enum/all-enum'
import { MsgTag } from '../../types/enum/msg_tag'
import { FixSession } from '../fix-session'

export abstract class FixmlSession extends FixSession {

  protected constructor (public readonly config: IJsFixConfig) {
    super(config)
    this.requestLogoutType = 'UserReq'
    this.respondLogoutType = 'UserRsp'
  }

  public run (transport: MsgTransport): Promise<any> {
    const logger = this.sessionLogger
    if (this.transport) {
      logger.info('reset from previous transport.')
      this.reset()
    }
    this.transport = transport
    this.subscribe()
    return new Promise<any>((accept, reject) => {
      if (this.initiator) {
        logger.debug('sending logon')
        this.send('UserReq', this.config.factory.logon())
      }
      this.emitter.on('error', (e: Error) => {
        logger.error(e)
        reject(e)
      })
      this.emitter.on('done', () => {
        accept()
      })
    })
  }

  private subscribe () {

    const transport = this.transport
    const logger = this.sessionLogger

    const rx = transport.receiver
    const tx = transport.transmitter

    rx.on('msg', (msgType: string, view: MsgView) => {
      if (this.logReceivedMsgs) {
        const name = view.segment.type !== SegmentType.Unknown ? view.segment.set.name : 'unknown'
        logger.info(`${msgType}: ${name}`)
        logger.info(`${view.toString()}`)
      }
      this.sessionState.lastReceivedAt = new Date()
      if (this.manageSession) {
        this.onMsg(msgType, view)
      } else {
        this.checkForwardMsg(msgType, view)
      }
    })

    rx.on('error', (e: Error) => {
      logger.warning(`rx error event: ${e.message} ${e.stack || ''}`)
      this.terminate(e)
    })

    rx.on('done', () => this.done())
    rx.on('end', () => {
      this.done()
    })

    rx.on('decoded', (msgType: string, data: ElasticBuffer, ptr: number) => {
      logger.debug(`rx: [${msgType}] ${ptr} bytes`)
      this.onDecoded(msgType, data.toString(ptr))
    })

    tx.on('error', (e: Error) => {
      logger.warning(`tx error event: ${e.message} ${e.stack || ''}`)
      this.terminate(e)
    })

    tx.on('encoded', (msgType: string, data: Buffer) => {
      logger.debug(`tx: [${msgType}] ${data.length} bytes`)
      this.onEncoded(msgType, data.toString())
    })
  }

  private onMsg (msgType: string, view: MsgView): void {

    switch (msgType) {
      case 'UserReq':
      case 'UserRsp': {
        this.onSessionMsg(msgType, view)
        break
      }

      default: {
        this.checkForwardMsg(msgType, view)
        break
      }
    }
  }

  private onSessionMsg (msgType: string, view: MsgView): void {
    switch (msgType) {
      case 'UserReq': {
        const reqType: number = view.getTyped('UserReqTyp')
        switch (reqType) {
          case UserRequestType.LogOnUser: {
            this.peerLogon(view)
            break
          }

          case UserRequestType.LogOffUser: {
            this.peerLogout(view)
            break
          }
        }
        break
      }

      case 'UserRsp': {
        const userStatus: number = view.getTyped('UserStatus')
        switch (userStatus) {
          case UserStatus.LoggedIn: {
            this.peerLogon(view)
            break
          }

          case UserStatus.NotLoggedIn: {
            this.peerLogout(view)
            break
          }
        }
        break
      }
    }
  }

  private peerLogon (view: MsgView) {
    const logger = this.sessionLogger
    const state = this.sessionState
    state.state = SessionState.PeerLoggedOn
    state.peerCompId = view.getTyped(MsgTag.SenderCompID)
    if (this.acceptor) {
      const reqId: string = view.getString('UserReqID')
      this.send('UserRsp', this.config.factory.logon(reqId, true))
    }
    logger.info(`system ready, inform app`)
    this.onReady(view)
  }

  private checkForwardMsg (msgType: string, view: MsgView): void {
    this.sessionLogger.info(`forwarding msgType = '${msgType}' to application`)
    this.onApplicationMsg(msgType, view)
  }
}
