import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IUserRequest {
  StandardHeader: IStandardHeader
  UserRequestID: string// 923
  UserRequestType: number// 924
  Username: string// 553
  Password?: string// 554
  NewPassword?: string// 925
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  StandardTrailer: IStandardTrailer
}
