import { IParties } from './parties'
import { IOrderQtyData } from './order_qty_data'

export interface ICrossOrderCancelRequestNoSides {
  Side: string// [1] 54 (String)
  OrigClOrdID: string// [2] 41 (String)
  ClOrdID: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ClOrdLinkID?: string// [5] 583 (String)
  OrigOrdModTime?: Date// [6] 586 (UtcTimestamp)
  Parties: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  TradeOriginationDate?: string// [8] 229 (String)
  OrderQtyData: IOrderQtyData// [9] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  ComplianceID?: string// [10] 376 (String)
  Text?: string// [11] 58 (String)
  EncodedTextLen?: number// [12] 354 (Length)
  EncodedText?: Buffer// [13] 355 (RawData)
}
