import { ISessionMsgFactory } from './session-msg-factory'
import { ISessionDescription } from './session-description'
import { ILooseObject } from '../../collections/collection'
import { MsgType } from '../../types'

import {
  IHeartbeat,
  IReject,
  IResendRequest,
  ISequenceReset,
  IStandardHeader,
  IStandardTrailer,
  ITestRequest
} from '../../types/FIX4.4/repo'

export type ObjectMutator = (description: ISessionDescription, type: string, o: ILooseObject) => ILooseObject

export abstract class ASessionMsgFactory implements ISessionMsgFactory {
  public isAscii: boolean
  protected constructor (public readonly description: ISessionDescription, public mutator: ObjectMutator | null = null) {
  }

  public reject (msgType: string, seqNo: number, msg: string, reason: number): ILooseObject {
    const o: IReject = {
      RefMsgType: msgType,
      SessionRejectReason: reason,
      RefSeqNum: seqNo,
      Text: msg
    } as IReject
    return this.mutator ? this.mutator(this.description, MsgType.Reject, o) : o
  }

  // see implementations Ascii and Fixml
  public abstract logon (userRequestId: string, isResponse: boolean): ILooseObject
  public abstract logout (msgType: string, text: string): ILooseObject
  public abstract header (msgType: string, seqNum: number, time: Date, overrideData?: Partial<IStandardHeader>): ILooseObject

  protected mutate (o: ILooseObject, type: string): ILooseObject {
    return this.mutator ? this.mutator(this.description, type, o) : o
  }

  public testRequest (reqId: string = `ping-${new Date().toUTCString()}`): ILooseObject {
    const o: ITestRequest = {
      TestReqID: reqId
    } as ITestRequest
    return this.mutate(o, MsgType.TestRequest)
  }

  public heartbeat (testReqId: string): ILooseObject {
    const o: IHeartbeat = {
      TestReqID: testReqId
    } as IHeartbeat
    return this.mutate(o, MsgType.Heartbeat)
  }

  public resendRequest (from: number, to: number): ILooseObject {
    const o: IResendRequest = {
      BeginSeqNo: from,
      EndSeqNo: to
    } as IResendRequest
    return this.mutate(o, MsgType.ResendRequest)
  }

  public sequenceReset (newSeqNo: number, gapFill?: boolean): ILooseObject {
    const o: ISequenceReset = {
      GapFillFlag: gapFill === true,
      NewSeqNo: newSeqNo
    } as ISequenceReset
    return this.mutate(o, MsgType.SequenceReset)
  }

  public trailer (checksum: number): ILooseObject {
    const s = checksum.toString()
    const padded = s.padStart(3, '0')
    const o = {
      CheckSum: padded
    } as IStandardTrailer
    return this.mutate(o, 'StandardTrailer')
  }
}
