import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IAllocAckGrp } from './set/alloc_ack_grp'

/*
*******************************************************
* AllocationReportAck can be found in Volume 5 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface IAllocationReportAck {
  AllocReportID: string// 755
  AllocID?: string// 70
  ClearingBusinessDate?: Date// 715
  AvgPxIndicator?: number// 819
  Quantity?: number// 53
  AllocTransType?: string// 71
  SecondaryAllocID?: string// 793
  AllocGroupID?: string// 1730
  FirmGroupID?: string// 1728
  AvgPxGroupID?: string// 1731
  TradeDate?: Date// 75
  TransactTime?: Date// 60
  AllocStatus?: number// 87
  AllocRejCode?: number// 88
  AllocReportType?: number// 794
  AllocIntermedReqType?: number// 808
  MatchStatus?: string// 573
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
  Parties?: IParties[]
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]
  AllocAckGrp?: IAllocAckGrp[]
}
