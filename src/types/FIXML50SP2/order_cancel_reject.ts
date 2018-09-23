import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'

/*
*****************************************************
* OrderCancelReject can be found in Volume 4 of the *
*                                                   *
* specification                                     *
*****************************************************
*/
export interface IOrderCancelReject {
  NotAffectedOrderID: string// 1371
  OrderRequestID?: number// 2422
  NotAffSecondaryOrderID?: string// 1825
  SecondaryClOrdID?: string// 526
  ClOrdID: string// 11
  ClOrdLinkID?: string// 583
  OrigClOrdID?: string// 41
  OrdStatus: string// 39
  WorkingIndicator?: string// 636
  OrigOrdModTime?: Date// 586
  SecurityListID?: string// 1465
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  RelSymTransactTime?: Date// 1504
  CxlRejResponseTo: string// 434
  CxlRejReason?: number// 102
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
