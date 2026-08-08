import { ISessionDescription } from '../session/session-description'
import { ILooseObject } from '../../collections/collection'
import { MsgType } from '../../types'
import { ASessionMsgFactory, ObjectMutator } from '../session/a-session-msg-factory'

import {
  EncryptMethod,
  ILogon,
  ILogout,
  IStandardHeader
} from '../../types/FIX4.4/repo'

export class AsciiSessionMsgFactory extends ASessionMsgFactory {
  constructor (readonly description: ISessionDescription, mutator: ObjectMutator | null = null) {
    super(description, mutator)
    this.isAscii = description.application?.protocol === 'ascii'
  }

  public logon (): ILooseObject {
    const description = this.description
    const o: ILogon = {
      Username: description.Username,
      Password: description.Password,
      HeartBtInt: description.HeartBtInt,
      ResetSeqNumFlag: description.ResetSeqNumFlag,
      EncryptMethod: EncryptMethod.None,
      // a counterparty demanding a tag the standard Logon does not carry needs no
      // code at all - name it under "Logon" in the session description.  Spread last
      // so an application can also override what the engine derived, or null out a
      // field it does not want sent.  See issue #93.
      ...description.Logon
    } as ILogon
    return this.mutate(o, MsgType.Logon)
  }

  public logout (text: string): ILooseObject {
    const o: ILogout = {
      Text: text
    } as ILogout
    return this.mutate(o, MsgType.Logout)
  }

  public header (msgType: string, seqNum: number, time: Date, overrideData?: Partial<IStandardHeader>): ILooseObject {
    const description = this.description
    const bodyLength: number = Math.max(4, description.BodyLengthChars ?? 7)
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
      SenderSubID: description.SenderSubID,
      ...overrideData
    }
    return this.mutate(o, 'StandardHeader')
  }
}

export class SessionMsgFactory extends AsciiSessionMsgFactory {
  constructor (public readonly description: ISessionDescription, public mutator: ObjectMutator | null = null) {
    super(description, mutator)
  }
}
