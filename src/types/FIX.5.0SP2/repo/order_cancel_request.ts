import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The order cancel request message requests the cancellation  *
* of all of the remaining quantity of an existing order. Note *
* that the Order Cancel/Replace Request should be used to     *
* partially cancel (reduce) an order).                        *
***************************************************************
*/
export interface IOrderCancelRequest {
  StandardHeader: IStandardHeader
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
  Parties?: IParties[]
  Instrument: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp
  Side: string// 54
  TransactTime: Date// 60
  OrderQtyData: IOrderQtyData
  ComplianceID?: string// 376
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
