import { IParties } from './parties'
import { IOrderQtyData } from './order_qty_data'

export interface ISideCrossOrdCxlGrp {
  Side: string// 54
  OrigClOrdID?: string// 41
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  OrigOrdModTime?: Date// 586
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  Parties?: IParties[]
  OrderQtyData: IOrderQtyData
}
