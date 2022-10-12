import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  ClOrdID: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ClOrdLinkID?: string// [5] 583 (String)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [7] 1 (String)
  Instrument?: IInstrument// [8] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Side: string// [9] 54 (String)
  StandardTrailer: IStandardTrailer// [10] SignatureLength.93, Signature.89, CheckSum.10
}
