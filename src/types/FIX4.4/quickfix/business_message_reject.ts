import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IBusinessMessageReject {
  StandardHeader: IStandardHeader
  RefSeqNum?: number// 45
  RefMsgType: string// 372
  BusinessRejectRefID?: string// 379
  BusinessRejectReason: number// 380
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
