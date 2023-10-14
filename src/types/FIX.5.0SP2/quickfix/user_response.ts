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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  UserRequestID: string// [2] 923 (String)
  Username: string// [3] 553 (String)
  UserStatus?: number// [4] 926 (Int)
  UserStatusText?: string// [5] 927 (String)
  StandardTrailer: IStandardTrailer// [6] SignatureLength.93, Signature.89, CheckSum.10
}
