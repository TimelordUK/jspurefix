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
  MDStatisticRptID: string// 2453
  AllocID?: string// 70
  ClearingBusinessDate?: Date// 715
  SideAvgPxIndicator?: number// 1853
  RelatedTradeQuantity?: number// 1860
  TransferTransType?: number// 2439
  SecondaryAllocID?: string// 793
  AllocGroupID?: string// 1730
  FirmGroupID?: string// 1728
  SideAvgPxGroupID?: string// 1854
  TradeDate?: Date// 75
  RelSymTransactTime?: Date// 1504
  AllocStatus?: number// 87
  AllocRejCode?: number// 88
  TransferReportType?: number// 2444
  AllocIntermedReqType?: number// 808
  MatchStatus?: string// 573
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
  Parties?: IParties[]
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]
  AllocAckGrp?: IAllocAckGrp[]
}
