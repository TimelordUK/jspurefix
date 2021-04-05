import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IAllocAckGrp } from './set/alloc_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocationInstructionAck {
  StandardHeader: IStandardHeader
  AllocID: string// 70
  Parties?: IParties
  SecondaryAllocID?: string// 793
  TradeDate?: Date// 75
  TransactTime: Date// 60
  AllocStatus: number// 87
  AllocRejCode?: number// 88
  AllocType?: number// 626
  AllocIntermedReqType?: number// 808
  MatchStatus?: string// 573
  Product?: number// 460
  SecurityType?: string// 167
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  AllocAckGrp?: IAllocAckGrp
  StandardTrailer: IStandardTrailer
}
