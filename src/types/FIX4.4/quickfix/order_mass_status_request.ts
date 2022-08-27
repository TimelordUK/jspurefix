import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderMassStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MassStatusReqID: string// [2] 584 (String)
  MassStatusReqType: number// [3] 585 (Int)
  Parties?: IParties// [4] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [5] 1 (String)
  AcctIDSource?: number// [6] 660 (Int)
  TradingSessionID?: string// [7] 336 (String)
  TradingSessionSubID?: string// [8] 625 (String)
  Instrument?: IInstrument// [9] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UnderlyingInstrument?: IUnderlyingInstrument// [10] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  Side?: string// [11] 54 (String)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
