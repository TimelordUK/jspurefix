import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IThrottleResponse } from './set/throttle_response'
import { IOrderEntryAckGrp } from './set/order_entry_ack_grp'

/*
************************************************
* MassOrderAck can be found in Volume 4 of the *
*                                              *
* specification                                *
************************************************
*/
export interface IMassOrderAck {
  MassOrderRequestID?: string// 2423
  MassOrderReportID?: string// 2424
  MassOrderRequestStatus: number// 2425
  MDStatisticRequestResult?: number// 2473
  OrderResponseLevel?: number// 2427
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradingCapacity: number// 1815
  LegClearingAccountType?: number// 1817
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  AllocCustomerCapacity?: string// 993
  ManualOrderIndicator?: string// 1028
  CustOrderHandlingInst?: string// 1031
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  CopyMsgIndicator?: string// 797
  TotNoOrderEntries?: number// 2432
  LastFragment?: string// 893
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Parties?: IParties[]
  ThrottleResponse?: IThrottleResponse
  OrderEntryAckGrp?: IOrderEntryAckGrp[]
}
