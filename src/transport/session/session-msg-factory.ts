import { ILooseObject } from '../../collections/collection'
import { IStandardHeader } from '../../types/FIX4.4/repo'
import { ISessionDescription } from './session-description'

export interface ISessionMsgFactory {
  description: ISessionDescription
  reject: (msgType: string, seqNo: number, msg: string, reason: number) => ILooseObject
  logout: (msgType: string, text: string) => ILooseObject
  logon: (userRequestId?: string, isResponse?: boolean) => ILooseObject
  testRequest: (reqId?: string) => ILooseObject
  resendRequest: (from: number, to: number) => ILooseObject
  sequenceReset: (newSeq: number, gapFill?: boolean) => ILooseObject
  heartbeat: (testReqId: string) => ILooseObject
  header: (msgType?: string, seqNum?: number, time?: Date, overrideData?: Partial<IStandardHeader>) => ILooseObject
  trailer: (checksum: number) => ILooseObject
}
