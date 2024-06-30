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
  private readonly compMap: Map<number, string> = new Map<number, string>()
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
      EncryptMethod: EncryptMethod.None
    } as ILogon
    return this.mutate(o, MsgType.Logon)
  }

  public addCompIdMapping (transportId: number, targetCompId: string): void {
    this.compMap.set(transportId, targetCompId)
  }

  public logout (text: string): ILooseObject {
    const o: ILogout = {
      Text: text
    } as ILogout
    return this.mutate(o, MsgType.Logout)
  }

  public header (transportId: number, msgType: string, seqNum: number, time: Date, overrideData?: Partial<IStandardHeader>): ILooseObject {
    const description = this.description
    const bodyLength: number = Math.max(4, description.BodyLengthChars ?? 7)
    const placeHolder = Math.pow(10, bodyLength - 1) + 1
    let targetCompId: string | undefined = description.TargetCompID
    if (targetCompId === '*') {
      if (this.compMap.has(transportId)) {
        targetCompId = this.compMap.get(transportId)
      }
    }
    const o: IStandardHeader = {
      BeginString: description.BeginString,
      BodyLength: placeHolder,
      MsgType: msgType,
      SenderCompID: description.SenderCompId,
      MsgSeqNum: seqNum,
      SendingTime: time,
      TargetCompID: targetCompId ?? description.TargetCompID,
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
