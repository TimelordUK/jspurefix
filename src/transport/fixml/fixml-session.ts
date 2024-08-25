import { MsgView } from '../../buffer'
import { IJsFixConfig } from '../../config'
import { UserRequestType, UserStatus } from '../../types/FIXML50SP2'
import { MsgTag } from '../../types'
import { FixSession } from '../session/fix-session'
import { SessionState } from '../session/session-state'

export abstract class FixmlSession extends FixSession {
  protected constructor (public readonly config: IJsFixConfig) {
    super(config)
    this.requestLogoutType = 'UserReq'
    this.requestLogonType = 'UserReq'
    this.respondLogoutType = 'UserRsp'
  }

  protected onMsg (msgType: string, view: MsgView): void {
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

  protected onSessionMsg (msgType: string, view: MsgView): void {
    switch (msgType) {
      case 'UserReq': {
        const reqType: number = view.getTyped('UserReqTyp') as number
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
        const userStatus: number = view.getTyped('UserStatus') as number
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

  private peerLogon (view: MsgView): void {
    const logger = this.sessionLogger
    const state = this.sessionState
    state.state = SessionState.InitiationLogonReceived
    state.peerCompId = view.getTyped(MsgTag.SenderCompID) as string
    if (this.acceptor) {
      const reqId: string = view.getString('UserReqID') ?? 'req'
      const o = this?.config?.factory?.logon(reqId, true)
      if (o) {
        this.send('UserRsp', o)
      }
    }
    logger.info('system ready, inform app')
    this.onReady(view)
  }
}
