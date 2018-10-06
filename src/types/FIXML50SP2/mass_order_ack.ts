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
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingCapacity: number// 1815
  ClearingAccountType?: number// 1816
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  CustOrderCapacity?: number// 582
  ManualOrderIndicator?: boolean// 1028
  CustOrderHandlingInst?: string// 1031
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  CopyMsgIndicator?: boolean// 797
  TotNoOrderEntries?: number// 2432
  LastFragment?: boolean// 893
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Parties?: IParties[]
  ThrottleResponse?: IThrottleResponse
  OrderEntryAckGrp?: IOrderEntryAckGrp[]
}
