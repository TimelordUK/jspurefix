import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IUserRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  UserRequestID: string// [2] 923 (String)
  UserRequestType: number// [3] 924 (Int)
  Username: string// [4] 553 (String)
  Password?: string// [5] 554 (String)
  NewPassword?: string// [6] 925 (String)
  RawDataLength?: number// [7] 95 (Length)
  RawData?: Buffer// [8] 96 (RawData)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
