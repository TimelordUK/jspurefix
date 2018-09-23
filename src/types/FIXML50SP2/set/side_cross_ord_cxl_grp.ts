import { IParties } from './parties'
import { IOrderQtyData } from './order_qty_data'

export interface ISideCrossOrdCxlGrp {
  RelativeValueSide: number// 2532
  AffectedOrigClOrdID?: string// 1824
  ClOrdID: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  OrigOrdModTime?: Date// 586
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  Parties?: IParties[]
  OrderQtyData: IOrderQtyData
}
