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
  NotAffectedOrderID?: string// 1371
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  SecurityListID?: string// 1465
  OrigOrdModTime?: Date// 586
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  SideCollateralAmountMarketSegmentID?: string// 2693
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  RelativeValueSide: number// 2532
  RelSymTransactTime: Date// 1504
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  OrderQtyData?: IOrderQtyData
}
