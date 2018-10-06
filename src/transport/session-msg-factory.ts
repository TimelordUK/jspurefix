import { ISessionMsgFactory } from './fix-msg-factory'
import { ISessionDescription } from './session-description'
import { ILooseObject } from '../collections/collection'
import { MsgType } from '../types/enum/msg_type'

import { ILogon } from '../types/FIX4.4/repo/logon'
import { ITestRequest } from '../types/FIX4.4/repo/test_request'
import { IHeartbeat } from '../types/FIX4.4/repo/heartbeat'
import { ILogout } from '../types/FIX4.4/repo/logout'
import { IResendRequest } from '../types/FIX4.4/repo/resend_request'
import { ISequenceReset } from '../types/FIX4.4/repo/sequence_reset'
import { IReject } from '../types/FIX4.4/repo/reject'
import { IStandardHeader } from '../types/FIX4.4/repo/set/standard_header'
import { IStandardTrailer } from '../types/FIX4.4/repo/set/standard_trailer'
import { EncryptMethod } from '../types/FIX4.4/repo/enum/all-enum'

import { IUserRequest } from '../types/FIXML50SP2/user_request'
import { UserRequestType, UserStatus } from '../types/FIXML50SP2/enum/all-enum'
import { IStandardHeader as IStandardHeaderFixml } from '../types/FIXML50SP2/set/standard_header'
import { IUserResponse } from '../types/FIXML50SP2/user_response'

export interface ObjectMutator { (description: ISessionDescription, type: string, o: ILooseObject): ILooseObject
}

export class SessionMsgFactory implements ISessionMsgFactory {

  public isAscii: boolean

  constructor (public readonly description: ISessionDescription, public mutator: ObjectMutator = null) {
    this.isAscii = description.application.protocol === 'ascii'
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

  public logon (userRequestId: string = '', isResponse: boolean = false): ILooseObject {
    if (this.isAscii) {
      return this.asciiLogon()
    } else {
      return this.fixmlLogon(userRequestId, isResponse)
    }
  }

  public logout (text: string, isResponse: boolean = false): ILooseObject {
    if (this.isAscii) {
      return this.asciiLogout(text)
    } else {
      return this.fixmlLogout(text, isResponse)
    }
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

  public header (msgType: string, seqNum: number = 0, time: Date = new Date()): ILooseObject {
    if (this.isAscii) {
      return this.asciiHeader(msgType, seqNum, time)
    } else {
      return this.fixmlHeader()
    }
  }

  public trailer (checksum: number): ILooseObject {
    return {
      CheckSum: checksum.toString()
    } as IStandardTrailer
  }

  private asciiLogon (): ILooseObject {
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

  private asciiLogout (text: string): ILooseObject {
    const o: ILogout = {
      Text:  text
    } as ILogout
    return this.mutator ? this.mutator(this.description, MsgType.Logout, o) : o
  }

  private fixmlLogon (userRequestId: string, isResponse: boolean): ILooseObject {
    const description = this.description
    if (!isResponse) {
      const o: IUserRequest = {
        Username: description.Username,
        Password: description.Password,
        UserRequestID: userRequestId,
        UserRequestType: UserRequestType.LogOnUser
      } as IUserRequest
      return this.mutator ? this.mutator(this.description, MsgType.Logon, o) : o
    } else {
      const o: IUserResponse = {
        Username: description.Username,
        UserRequestID: userRequestId,
        UserStatus: UserStatus.LoggedIn
      } as IUserResponse
      return this.mutator ? this.mutator(this.description, MsgType.Logon, o) : o
    }
  }

  private fixmlLogout (userRequestId: string, isResponse: boolean): ILooseObject {
    if (!isResponse) {
      const o: IUserRequest = {
        Username: this.description.Username,
        UserRequestID: userRequestId,
        UserRequestType: UserRequestType.LogOffUser
      } as IUserRequest
      return this.mutator ? this.mutator(this.description, MsgType.Logon, o) : o
    } else {
      const o: IUserResponse = {
        Username: this.description.Username,
        UserRequestID: userRequestId,
        UserStatus: UserStatus.NotLoggedIn
      } as IUserResponse
      return this.mutator ? this.mutator(this.description, MsgType.Logon, o) : o
    }
  }

  private asciiHeader (msgType: string, seqNum: number, time: Date): ILooseObject {
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

  private fixmlHeader (): ILooseObject {
    const description = this.description
    const o: IStandardHeaderFixml = {
      SenderCompID: description.SenderCompId,
      TargetCompID: description.TargetCompID,
      SenderSubID: description.SenderSubID,
      TargetSubID: description.TargetSubID
    } as IStandardHeaderFixml
    return this.mutator ? this.mutator(this.description, MsgType.Logon, o) : o
  }
}
