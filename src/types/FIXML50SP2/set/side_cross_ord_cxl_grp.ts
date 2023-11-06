import { IParties } from './parties'
import { IOrderQtyData } from './order_qty_data'

export interface ISideCrossOrdCxlGrp {
  Side: string// [1] 54 (String)
  OrigClOrdID?: string// [1] 41 (String)
  ClOrdID: string// [1] 11 (String)
  SecondaryClOrdID?: string// [1] 526 (String)
  ClOrdLinkID?: string// [1] 583 (String)
  OrigOrdModTime?: Date// [1] 586 (UtcTimestamp)
  TradeOriginationDate?: Date// [1] 229 (LocalDate)
  TradeDate?: Date// [1] 75 (LocalDate)
  ComplianceID?: string// [1] 376 (String)
  ComplianceText?: string// [1] 2404 (String)
  EncodedComplianceTextLen?: number// [1] 2351 (Length)
  EncodedComplianceText?: Buffer// [1] 2352 (RawData)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  Parties?: IParties[]// [1] ID.448, Src.447 .. Qual.2376
  OrderQtyData: IOrderQtyData// [2] Qty.38, Cash.152 .. RndMod.469
}
