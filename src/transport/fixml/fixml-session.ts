import { SessionState } from '../fix-session-state'
import { IJsFixConfig } from '../../config'
import { MsgView } from '../../buffer'
import { UserRequestType, UserStatus } from '../../types/FIXML50SP2/enum'
import { MsgTag } from '../../types/enum'
import { FixSession } from '../fix-session'

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
}
