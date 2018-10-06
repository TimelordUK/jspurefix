import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'

/*
******************************************************
* OrderStatusRequest can be found in Volume 4 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface IOrderStatusRequest {
  OrderID?: string// 37
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  OrdStatusReqID?: string// 790
  Account?: string// 1
  AcctIDSource?: number// 660
  MarketSegmentID?: string// 1300
  RelativeValueSide: number// 2532
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
}
