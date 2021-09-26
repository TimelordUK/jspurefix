import { ISessionMsgFactory } from './fix-msg-factory'
import { ISessionDescription } from './session-description'
import { ILooseObject } from '../collections/collection'
import { MsgType } from '../types'

import {
  EncryptMethod,
  IHeartbeat,
  ILogon,
  ILogout,
  IReject,
  IResendRequest,
  ISequenceReset,
  IStandardHeader,
  IStandardTrailer,
  ITestRequest
} from '../types/FIX4.4/repo'

import {
  IStandardHeader as IStandardHeaderFixml,
  IUserRequest,
  IUserResponse,
  UserRequestType,
  UserStatus
} from '../types/FIXML50SP2'

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

  public logout (msgType: string, text: string): ILooseObject {
    if (this.isAscii) {
      return this.asciiLogout(text)
    } else {
      return this.fixmlLogout(text, msgType !== 'UserReq')
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

  public sequenceReset (newSeqNo: number, gapFill?: boolean): ILooseObject {
    const o: ISequenceReset = {
      GapFillFlag: gapFill === true,
      NewSeqNo: newSeqNo
    } as ISequenceReset
    return this.mutator ? this.mutator(this.description, MsgType.SequenceReset, o) : o
  }

  public header (msgType: string, seqNum: number = 0, time: Date = new Date(), overrideData?: Partial<IStandardHeader>): ILooseObject {
    if (this.isAscii) {
      return this.asciiHeader(msgType, seqNum, time, overrideData)
    } else {
      return this.fixmlHeader()
    }
  }

  public trailer (checksum: number): ILooseObject {
    const s = checksum.toString()
    const padded = s.padStart(3, '0')
    return {
      CheckSum: padded
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

  protected asciiHeader (msgType: string, seqNum: number, time: Date, overrideData?: Partial<IStandardHeader>): ILooseObject {
    const description = this.description
    const bodyLength: number = Math.max(4, description.BodyLengthChars || 7)
    const placeHolder = Math.pow(10, bodyLength - 1) + 1
    const o: IStandardHeader = {
      BeginString: description.BeginString,
      BodyLength: placeHolder,
      MsgType: msgType,
      SenderCompID: description.SenderCompId,
      MsgSeqNum: seqNum,
      SendingTime: time,
      TargetCompID: description.TargetCompID,
      TargetSubID: description.TargetSubID,
      ...overrideData
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
