import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* This message is used to initiate a user action, logon,      *
* logout or password change. It can also be used to request a *
* report on a user's status.                                  *
***************************************************************
*/
export interface IUserRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  UserRequestID: string// [2] 923 (String)
  UserRequestType: number// [3] 924 (Int)
  Username: string// [4] 553 (String)
  Password?: string// [5] 554 (String)
  NewPassword?: string// [6] 925 (String)
  EncryptedPasswordMethod?: number// [7] 1400 (Int)
  EncryptedPasswordLen?: number// [8] 1401 (Int)
  EncryptedPassword?: Buffer// [9] 1402 (RawData)
  EncryptedNewPasswordLen?: number// [10] 1403 (Int)
  EncryptedNewPassword?: Buffer// [11] 1404 (RawData)
  RawDataLength?: number// [12] 95 (Int)
  RawData?: Buffer// [13] 96 (RawData)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
