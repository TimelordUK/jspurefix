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
  StandardHeader: IStandardHeader
  UserRequestID: string// 923
  UserRequestType: number// 924
  Username: string// 553
  Password?: string// 554
  NewPassword?: string// 925
  EncryptedPasswordMethod?: number// 1400
  EncryptedPasswordLen?: number// 1401
  EncryptedPassword?: Buffer// 1402
  EncryptedNewPasswordLen?: number// 1403
  EncryptedNewPassword?: Buffer// 1404
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  StandardTrailer: IStandardTrailer
}
