import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderMassStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MassStatusReqID: string// [2] 584 (String)
  MassStatusReqType: number// [3] 585 (Int)
  Parties?: IParties// [4] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [5] 1 (String)
  TradingSessionID?: string// [6] 336 (String)
  TradingSessionSubID?: string// [7] 625 (String)
  Instrument?: IInstrument// [8] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  UnderlyingInstrument?: IUnderlyingInstrument// [9] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. EncodedUnderlyingSecurityDesc.365
  Side?: string// [10] 54 (String)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
