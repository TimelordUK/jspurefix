import { ILooseObject } from '../collections/collection'
import { ISessionDescription } from './session-description'

export interface IAsciiSessionMsgFactory {
  description: ISessionDescription
  reject (msgType: string, seqNo: number, msg: string, reason: number): ILooseObject
  logout (text: string): ILooseObject
  logon (): ILooseObject
  testRequest (reqId?: string): ILooseObject
  resendRequest (from: number, to: number): ILooseObject
  sequenceReset (newSeq: number): ILooseObject
  heartbeat (testReqId: string): ILooseObject
  header (msgType: string, seqNum: number, time: Date): ILooseObject
  trailer (checksum: number): ILooseObject
}
