import { IParties } from './parties'
import { IOrderQtyData } from './order_qty_data'

export interface ISideCrossOrdCxlGrpNoSides {
  Side: string// [1] 54 (String)
  OrigClOrdID: string// [2] 41 (String)
  ClOrdID: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ClOrdLinkID?: string// [5] 583 (String)
  OrigOrdModTime?: Date// [6] 586 (UtcTimestamp)
  Parties: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeOriginationDate?: Date// [8] 229 (LocalDate)
  TradeDate?: Date// [9] 75 (LocalDate)
  OrderQtyData: IOrderQtyData// [10] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  ComplianceID?: string// [11] 376 (String)
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Length)
  EncodedText?: Buffer// [14] 355 (RawData)
}
