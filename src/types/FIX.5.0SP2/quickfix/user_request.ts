import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IUserRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  UserRequestID: string// [2] 923 (String)
  UserRequestType: number// [3] 924 (Int)
  Username: string// [4] 553 (String)
  Password?: string// [5] 554 (String)
  NewPassword?: string// [6] 925 (String)
  EncryptedPasswordMethod?: number// [7] 1400 (Int)
  EncryptedPasswordLen?: number// [8] 1401 (Length)
  EncryptedPassword?: Buffer// [9] 1402 (RawData)
  EncryptedNewPasswordLen?: number// [10] 1403 (Length)
  EncryptedNewPassword?: Buffer// [11] 1404 (RawData)
  RawDataLength?: number// [12] 95 (Length)
  RawData?: Buffer// [13] 96 (RawData)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
