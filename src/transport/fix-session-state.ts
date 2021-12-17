import { ElasticBuffer } from '../buffer'
import moment = require('moment')
import { SessionState } from './tcp'

export enum TickAction {
  Nothing = 1,
  Heartbeat = 2,
  TestRequest = 3,
  TerminateOnError = 4,
  WaitLogoutConfirmExpired = 5,
  Stop = 6
}

interface IFixSessionStateArgs {
  heartBeat: number
  state?: SessionState
  waitLogoutConfirmSeconds?: number
  stopSeconds?: number
  lastPeerMsgSeqNum?: number
}

export class FixSessionState {
  public nextTickAction: TickAction = TickAction.Nothing

  public lastReceivedAt: Date = null
  public LastSentAt: Date = null
  public lastTestRequestAt: Date = null
  public logoutSentAt: Date = null
  public now: Date = new Date()
  public compId: string = ''
  public peerCompId: string = ''
  public peerHeartBeatSecs: number = 0
  public lastPeerMsgSeqNum: number
  public readonly heartBeat: number
  public state: SessionState
  public readonly waitLogoutConfirmSeconds: number
  public readonly stopSeconds: number

  private secondsSinceLogoutSent: number = -1
  private secondsSinceSent: number = -1
  private secondsSinceReceive: number = -1

  public reset (resetSeqNo: boolean): void {
    this.lastReceivedAt = null
    this.LastSentAt = null
    this.lastTestRequestAt = null
    this.secondsSinceLogoutSent = -1
    this.secondsSinceSent = -1
    this.secondsSinceReceive = -1
    this.peerHeartBeatSecs = 0
    this.logoutSentAt = null
    this.nextTickAction = TickAction.Nothing
    if (resetSeqNo) {
      this.lastPeerMsgSeqNum = 0
    }
  }

  public constructor ({ heartBeat,
                        state = SessionState.Idle,
                        waitLogoutConfirmSeconds = 5,
                        stopSeconds = 2,
                        lastPeerMsgSeqNum = 0 }: IFixSessionStateArgs) {
    this.heartBeat = heartBeat
    this.state = state
    this.waitLogoutConfirmSeconds = waitLogoutConfirmSeconds
    this.stopSeconds = stopSeconds
    this.lastPeerMsgSeqNum = lastPeerMsgSeqNum
  }

  private static dateAsString (d: Date) {
    if (!d) {
      return 'null'
    }
    return moment(d).format('HH:mm:ss.SSS')
  }

  public toString (): string {

    const buffer = new ElasticBuffer(1024)

    buffer.writeString(`compId = ${this.compId}, `)
    buffer.writeString(`heartBeat = ${this.heartBeat}, `)
    buffer.writeString(`state = ${SessionState[this.state]} (${this.state}), `)
    buffer.writeString(`nextTickAction = ${TickAction[this.nextTickAction]} (${this.nextTickAction}), `)
    buffer.writeString(`now = ${FixSessionState.dateAsString(this.now)}, `)
    buffer.writeString(`timeToDie = ${this.timeToDie()}, `)
    buffer.writeString(`timeToHeartbeat = ${this.timeToHeartbeat()}, `)
    buffer.writeString(`timeToTerminate = ${this.timeToTerminate()}, `)
    buffer.writeString(`timeToTestRequest = ${this.timeToTestRequest()}, `)
    buffer.writeString(`lastReceivedAt = ${FixSessionState.dateAsString(this.lastReceivedAt)}, `)
    buffer.writeString(`LastSentAt = ${FixSessionState.dateAsString(this.LastSentAt)}, `)
    buffer.writeString(`lastTestRequestAt = ${FixSessionState.dateAsString(this.lastTestRequestAt)}, `)
    buffer.writeString(`logoutSentAt = ${FixSessionState.dateAsString(this.logoutSentAt)}, `)
    buffer.writeString(`peerHeartBeatSecs = ${this.peerHeartBeatSecs}, `)
    buffer.writeString(`peerCompId = ${this.peerCompId}, `)
    buffer.writeString(`lastPeerMsgSeqNum = ${this.lastPeerMsgSeqNum}, `)
    buffer.writeString(`secondsSinceLogoutSent = ${this.secondsSinceLogoutSent}, `)
    buffer.writeString(`secondsSinceSent = ${this.secondsSinceSent}, `)
    buffer.writeString(`secondsSinceReceive = ${this.secondsSinceReceive}`)

    return buffer.toString()
  }

  public calcAction (now: Date): TickAction {
    this.now = now
    this.calcState()

    switch (this.state) {

      case SessionState.PeerLogonRejected: {
        if (this.secondsSinceSent >= this.stopSeconds) {
          this.nextTickAction = TickAction.Stop
        }
        break
      }

      case SessionState.WaitingLogoutConfirm:
      case SessionState.ConfirmingLogout: {
        if (this.timeToDie()) {
          this.nextTickAction = TickAction.Stop
        }
        break
      }

      case SessionState.ActiveNormalSession:
      case SessionState.AwaitingProcessingResponseToTestRequest:
      case SessionState.InitiationLogonReceived:
      case SessionState.InitiationLogonResponse : {
        if (this.timeToHeartbeat()) {
          // have not sent anything for heartbeat period so let other side know still alive.
          this.nextTickAction = TickAction.Heartbeat
        } else {
          // console.log(`${application.name}: secondsSinceSent = ${secondsSinceSent} secondsSinceReceive = ${secondsSinceReceive}`)
          if (this.timeToTerminate()) {
            this.nextTickAction = TickAction.TerminateOnError
          } else if (this.timeToTestRequest()) {
            if (!this.lastTestRequestAt) {
              // not received anything from peer
              this.nextTickAction = TickAction.TestRequest
              this.lastTestRequestAt = this.now
            }
          }
        }
        break
      }
    }

    return this.nextTickAction
  }

  public timeToDie (): boolean {
    return this.secondsSinceLogoutSent > this.waitLogoutConfirmSeconds ||
      this.secondsSinceLogoutSent > this.stopSeconds
  }

  public timeToHeartbeat (): boolean {
    return this.secondsSinceSent >= this.heartBeat
  }

  public timeToTerminate (): boolean {
    return this.secondsSinceReceive >= 2.5 * this.peerHeartBeatSecs
  }

  public timeToTestRequest (): boolean {
    return this.secondsSinceReceive >= 1.5 * this.peerHeartBeatSecs
  }

  private calcState (): void {
    const time = this.now.getTime()
    this.nextTickAction = TickAction.Nothing
    this.secondsSinceLogoutSent = this.logoutSentAt ? (time - this.logoutSentAt.getTime()) / 1000 : -1
    this.secondsSinceSent = (time - this.LastSentAt.getTime()) / 1000
    this.secondsSinceReceive = (time - this.lastReceivedAt.getTime()) / 1000
  }
}
