import { SessionState } from './tcp'

export interface IFixSessionStateArgs {
  heartBeat: number
  state?: SessionState
  waitLogoutConfirmSeconds?: number
  stopSeconds?: number
  lastPeerMsgSeqNum?: number
}
