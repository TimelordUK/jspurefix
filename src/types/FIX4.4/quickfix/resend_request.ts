import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IResendRequest {
  StandardHeader: IStandardHeader
  BeginSeqNo: number// 7
  EndSeqNo: number// 16
  StandardTrailer: IStandardTrailer
}
