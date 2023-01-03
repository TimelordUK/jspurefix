import { ElasticBuffer } from '../../buffer'
import moment = require('moment')
import { TickAction } from '../tick-action'
import { IFixSessionStateArgs } from './fix-session-state-args'
import { SessionState } from './session-state'
import { ILooseObject } from '../../collections/collection'

export class FixSessionState {
  public nextTickAction: TickAction = TickAction.Nothing

  public lastReceivedAt: Date | null = null
  public LastSentAt: Date | null = null
  public lastTestRequestAt: Date | null = null
  public logoutSentAt: Date | null = null
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
  public lastHeader: ILooseObject | null = null

  public reset (lastPeerMsgSeqNum: number = 0): void {
    this.lastReceivedAt = null
    this.LastSentAt = null
    this.lastTestRequestAt = null
    this.secondsSinceLogoutSent = -1
    this.secondsSinceSent = -1
    this.secondsSinceReceive = -1
    this.peerHeartBeatSecs = 0
    this.logoutSentAt = null
    this.nextTickAction = TickAction.Nothing
    this.lastPeerMsgSeqNum = lastPeerMsgSeqNum
    this.lastHeader = null
  }

  public constructor ({
    heartBeat,
    state = SessionState.Idle,
    waitLogoutConfirmSeconds = 5,
    stopSeconds = 2,
    lastPeerMsgSeqNum = 0
  }: IFixSessionStateArgs) {
    this.heartBeat = heartBeat
    this.state = state
    this.waitLogoutConfirmSeconds = waitLogoutConfirmSeconds
    this.stopSeconds = stopSeconds
    this.lastPeerMsgSeqNum = lastPeerMsgSeqNum
  }

  private static dateAsString (d: Date | null): string {
    if (!d) {
      return 'null'
    }
    return moment(d).format('HH:mm:ss.SSS')
  }

  public lastSentSeqNum (): number {
    return this?.lastHeader?.MsgSeqNum ?? 0
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
    buffer.writeString(`LastSentSeqNum = ${this.lastSentSeqNum()}, `)
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
    this.secondsSinceSent = this.LastSentAt != null ? (time - this.LastSentAt.getTime()) / 1000 : 0
    this.secondsSinceReceive = this.lastReceivedAt != null ? (time - this.lastReceivedAt.getTime()) / 1000 : 0
  }
}
