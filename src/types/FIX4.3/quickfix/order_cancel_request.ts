import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IOrderQtyData } from './set/order_qty_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrigClOrdID: string// [2] 41 (String)
  OrderID?: string// [3] 37 (String)
  ClOrdID: string// [4] 11 (String)
  SecondaryClOrdID?: string// [5] 526 (String)
  ClOrdLinkID?: string// [6] 583 (String)
  ListID?: string// [7] 66 (String)
  OrigOrdModTime?: Date// [8] 586 (UtcTimestamp)
  Account?: string// [9] 1 (String)
  AccountType?: number// [10] 581 (Int)
  Parties?: IParties// [11] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Side: string// [13] 54 (String)
  TransactTime: Date// [14] 60 (UtcTimestamp)
  OrderQtyData?: IOrderQtyData// [15] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  ComplianceID?: string// [16] 376 (String)
  Text?: string// [17] 58 (String)
  EncodedTextLen?: number// [18] 354 (Length)
  EncodedText?: Buffer// [19] 355 (RawData)
  StandardTrailer: IStandardTrailer// [20] SignatureLength.93, Signature.89, CheckSum.10
}
