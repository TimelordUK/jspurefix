import { ISessionDescription } from '../session/session-description'
import { ILooseObject } from '../../collections/collection'
import { MsgType } from '../../types'
import { ASessionMsgFactory, ObjectMutator } from '../session/a-session-msg-factory'

import {
  IStandardHeader,
  IUserRequest,
  IUserResponse,
  UserRequestType,
  UserStatus
} from '../../types/FIXML50SP2'

export class FixmlSessionMsgFactory extends ASessionMsgFactory {
  constructor (readonly description: ISessionDescription, mutator: ObjectMutator | null = null) {
    super(description, mutator)
  }

  public logon (userRequestId: string = '', isResponse: boolean = false): ILooseObject {
    return this.fixmlLogon(userRequestId, isResponse)
  }

  public logout (msgType: string, text: string): ILooseObject {
    return this.fixmlLogout(msgType, msgType !== 'UserReq')
  }

  public header (msgType: string, seqNum: number = 0, time: Date = new Date(), overrideData?: Partial<IStandardHeader>): ILooseObject {
    const description = this.description
    const o: IStandardHeader = {
      SenderCompID: description.SenderCompId,
      TargetCompID: description.TargetCompID,
      SenderSubID: description.SenderSubID,
      TargetSubID: description.TargetSubID
    } as IStandardHeader
    return this.mutate(o, 'StandardHeader')
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
      return this.mutate(o, MsgType.Logon)
    } else {
      const o: IUserResponse = {
        Username: description.Username,
        UserRequestID: userRequestId,
        UserStatus: UserStatus.LoggedIn
      } as IUserResponse
      return this.mutate(o, MsgType.Logon)
    }
  }

  private fixmlLogout (userRequestId: string, isResponse: boolean): ILooseObject {
    if (!isResponse) {
      const o: IUserRequest = {
        Username: this.description.Username,
        UserRequestID: userRequestId,
        UserRequestType: UserRequestType.LogOffUser
      } as IUserRequest
      return this.mutate(o, MsgType.Logout)
    } else {
      const o: IUserResponse = {
        Username: this.description.Username,
        UserRequestID: userRequestId,
        UserStatus: UserStatus.NotLoggedIn
      } as IUserResponse
      return this.mutate(o, MsgType.Logout)
    }
  }
}
