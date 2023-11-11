import { IStandardHeader } from './set/standard_header'

/*
***********************************************
* UserRequest can be found in Volume 1 of the *
*                                             *
* specification                               *
***********************************************
*/
export interface IUserRequest {
  UserRequestID: string// [2] 923 (String)
  UserRequestType: number// [2] 924 (Int)
  Username: string// [2] 553 (String)
  Password?: string// [2] 554 (String)
  NewPassword?: string// [2] 925 (String)
  EncryptedPasswordMethod?: number// [2] 1400 (Int)
  EncryptedPasswordLen?: number// [2] 1401 (Length)
  EncryptedPassword?: Buffer// [2] 1402 (RawData)
  EncryptedNewPasswordLen?: number// [2] 1403 (Length)
  EncryptedNewPassword?: Buffer// [2] 1404 (RawData)
  RawDataLength?: number// [2] 95 (Length)
  RawData?: Buffer// [2] 96 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
}
