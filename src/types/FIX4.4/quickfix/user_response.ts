import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IUserResponse {
  StandardHeader: IStandardHeader
  UserRequestID: string// 923
  Username: string// 553
  UserStatus?: number// 926
  UserStatusText?: string// 927
  StandardTrailer: IStandardTrailer
}
