import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'

/*
******************************************************
* OrderCancelRequest can be found in Volume 4 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface IOrderCancelRequest {
  OrderRequestID?: number// 2422
  OrigClOrdID?: string// 41
  OrderID?: string// 37
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  ListID?: string// 66
  OrigOrdModTime?: Date// 586
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  MarketSegmentID?: string// 1300
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  Side: string// 54
  TransactTime: Date// 60
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  OrderQtyData?: IOrderQtyData
}
