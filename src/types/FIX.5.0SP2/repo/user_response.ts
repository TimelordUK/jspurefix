import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* This message is used to respond to a user request message, *
* it reports the status of the user after the completion of  *
* any action requested in the user request message.          *
**************************************************************
*/
export interface IUserResponse {
  StandardHeader: IStandardHeader
  UserRequestID: string// 923
  Username: string// 553
  UserStatus?: number// 926
  UserStatusText?: string// 927
  StandardTrailer: IStandardTrailer
}
