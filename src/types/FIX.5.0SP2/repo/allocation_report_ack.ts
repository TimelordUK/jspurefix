import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IAllocAckGrp } from './set/alloc_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Allocation Report Ack message is used to acknowledge the *
* receipt of and provide status for an Allocation Report       *
* message.                                                     *
****************************************************************
*/
export interface IAllocationReportAck {
  StandardHeader: IStandardHeader
  AllocReportID: string// 755
  AllocID?: string// 70
  ClearingBusinessDate?: Date// 715
  AvgPxIndicator?: number// 819
  Quantity?: number// 53
  AllocTransType?: string// 71
  Parties?: IParties[]
  SecondaryAllocID?: string// 793
  TradeDate?: Date// 75
  TransactTime?: Date// 60
  AllocStatus?: number// 87
  AllocRejCode?: number// 88
  AllocReportType?: number// 794
  AllocIntermedReqType?: number// 808
  MatchStatus?: string// 573
  Product?: number// 460
  SecurityType?: string// 167
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  AllocAckGrp?: IAllocAckGrp[]
  StandardTrailer: IStandardTrailer
}
