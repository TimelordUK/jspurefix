import { IParties } from './parties'
import { IOrderQtyData } from './order_qty_data'

export interface ISideCrossOrdCxlGrpNoSides {
  Side: string// [1] 54 (String)
  OrigClOrdID?: string// [2] 41 (String)
  ClOrdID: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ClOrdLinkID?: string// [5] 583 (String)
  OrigOrdModTime?: Date// [6] 586 (UtcTimestamp)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeOriginationDate?: Date// [8] 229 (LocalDate)
  TradeDate?: Date// [9] 75 (LocalDate)
  OrderQtyData?: IOrderQtyData// [10] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  ComplianceID?: string// [11] 376 (String)
  ComplianceText?: string// [12] 2404 (String)
  EncodedComplianceTextLen?: number// [13] 2351 (Length)
  EncodedComplianceText?: Buffer// [14] 2352 (RawData)
  Text?: string// [15] 58 (String)
  EncodedTextLen?: number// [16] 354 (Length)
  EncodedText?: Buffer// [17] 355 (RawData)
}
