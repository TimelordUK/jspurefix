import { SessionState } from './session-state'

export interface IFixSessionStateArgs {
  heartBeat: number
  state?: SessionState
  waitLogoutConfirmSeconds?: number
  stopSeconds?: number
  lastPeerMsgSeqNum?: number
}
