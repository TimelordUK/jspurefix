import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderMassCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  MassCancelRequestType: string// [4] 530 (String)
  TradingSessionID?: string// [5] 336 (String)
  TradingSessionSubID?: string// [6] 625 (String)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [8] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  Instrument?: IInstrument// [9] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UnderlyingInstrument?: IUnderlyingInstrument// [10] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  MarketID?: string// [11] 1301 (String)
  MarketSegmentID?: string// [12] 1300 (String)
  Side?: string// [13] 54 (String)
  TransactTime: Date// [14] 60 (UtcTimestamp)
  Text?: string// [15] 58 (String)
  EncodedTextLen?: number// [16] 354 (Length)
  EncodedText?: Buffer// [17] 355 (RawData)
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
}
