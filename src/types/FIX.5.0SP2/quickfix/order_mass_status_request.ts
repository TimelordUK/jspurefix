import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderMassStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MassStatusReqID: string// [2] 584 (String)
  MassStatusReqType: number// [3] 585 (Int)
  Parties?: IParties// [4] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [5] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  Account?: string// [6] 1 (String)
  AcctIDSource?: number// [7] 660 (Int)
  TradingSessionID?: string// [8] 336 (String)
  TradingSessionSubID?: string// [9] 625 (String)
  Instrument?: IInstrument// [10] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UnderlyingInstrument?: IUnderlyingInstrument// [11] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  Side?: string// [12] 54 (String)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
