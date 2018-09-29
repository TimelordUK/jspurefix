import { IAsciiSessionMsgFactory } from '../fix-msg-factory'
import { ISessionDescription } from '../session-description'
import { ILogon } from '../../types/FIX4.4/repo/logon'
import { ITestRequest } from '../../types/FIX4.4/repo/test_request'
import { IHeartbeat } from '../../types/FIX4.4/repo/heartbeat'
import { ILogout } from '../../types/FIX4.4/repo/logout'
import { IResendRequest } from '../../types/FIX4.4/repo/resend_request'
import { ISequenceReset } from '../../types/FIX4.4/repo/sequence_reset'
import { IReject } from '../../types/FIX4.4/repo/reject'
import { IStandardHeader } from '../../types/FIX4.4/repo/set/standard_header'
import { IStandardTrailer } from '../../types/FIX4.4/repo/set/standard_trailer'
import { ILooseObject } from '../../collections/collection'
import { MsgType } from '../../types/enum/msg_type'
import { EncryptMethod } from '../../types/FIX4.4/repo/enum/all-enum'

export interface ObjectMutator { (description: ISessionDescription, type: string, o: ILooseObject): ILooseObject
}

export class AsciiSessionMsgFactory implements IAsciiSessionMsgFactory {

  constructor (public readonly description: ISessionDescription, public mutator: ObjectMutator = null) {
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

  public logon (): ILooseObject {
    const description = this.description
    const o: ILogon = {
      Username: description.Username,
      Password: description.Password,
      HeartBtInt: description.HeartBtInt,
      ResetSeqNumFlag: description.ResetSeqNumFlag,
      EncryptMethod: EncryptMethod.None
    } as ILogon
    return this.mutator ? this.mutator(this.description, MsgType.Logon, o) : o
  }

  public logout (text: string): ILooseObject {
    const o: ILogout = {
      Text:  text
    } as ILogout
    return this.mutator ? this.mutator(this.description, MsgType.Logout, o) : o
  }

  public testRequest (reqId: string = `ping-${new Date().toUTCString()}`): ILooseObject {
    const o: ITestRequest = {
      TestReqID: reqId
    } as ITestRequest
    return this.mutator ? this.mutator(this.description, MsgType.TestRequest, o) : o
  }

  public heartbeat (testReqId: string): ILooseObject {
    const o: IHeartbeat = {
      TestReqID: testReqId
    } as IHeartbeat
    return this.mutator ? this.mutator(this.description, MsgType.Heartbeat, o) : o
  }

  public resendRequest (from: number, to: number): ILooseObject {
    const o: IResendRequest = {
      BeginSeqNo: from,
      EndSeqNo: to
    } as IResendRequest
    return this.mutator ? this.mutator(this.description, MsgType.ResendRequest, o) : o
  }

  public sequenceReset (newSeqNo: number): ILooseObject {
    const o: ISequenceReset = {
      GapFillFlag: true,
      NewSeqNo: newSeqNo
    } as ISequenceReset
    return this.mutator ? this.mutator(this.description, MsgType.SequenceReset, o) : o
  }

  public header (msgType: string, seqNum: number, time: Date): ILooseObject {
    const description = this.description
    const o: IStandardHeader = {
      BeginString: description.BeginString,
      BodyLength: 9999999,
      MsgType: msgType,
      SenderCompID: description.SenderCompId,
      MsgSeqNum: seqNum,
      SendingTime: time,
      TargetCompID: description.TargetCompID,
      TargetSubID: description.TargetSubID
    }
    return this.mutator ? this.mutator(description, 'StandardHeader', o) : o
  }

  public trailer (checksum: number): ILooseObject {
    return {
      CheckSum: checksum.toString()
    } as IStandardTrailer
  }
}
