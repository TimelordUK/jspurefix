import { IStandardHeader } from './set/standard_header'
import { ITargetMarketSegmentGrp } from './set/target_market_segment_grp'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderMassActionRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  MassActionType: number// [4] 1373 (Int)
  MassActionScope: number// [5] 1374 (Int)
  MassActionReason?: number// [6] 2675 (Int)
  MarketID?: string// [7] 1301 (String)
  MarketSegmentID?: string// [8] 1300 (String)
  TargetMarketSegmentGrp?: ITargetMarketSegmentGrp// [9] NoTargetMarketSegments.1789, TargetMarketSegmentID.1790
  TradingSessionID?: string// [10] 336 (String)
  TradingSessionSubID?: string// [11] 625 (String)
  Parties?: IParties// [12] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [13] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  Instrument?: IInstrument// [14] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UnderlyingInstrument?: IUnderlyingInstrument// [15] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  Side?: string// [16] 54 (String)
  Price?: number// [17] 44 (Float)
  TransactTime: Date// [18] 60 (UtcTimestamp)
  ComplianceID?: string// [19] 376 (String)
  ComplianceText?: string// [20] 2404 (String)
  EncodedComplianceTextLen?: number// [21] 2351 (Length)
  EncodedComplianceText?: Buffer// [22] 2352 (RawData)
  Text?: string// [23] 58 (String)
  EncodedTextLen?: number// [24] 354 (Length)
  EncodedText?: Buffer// [25] 355 (RawData)
  StandardTrailer: IStandardTrailer// [26] SignatureLength.93, Signature.89, CheckSum.10
}
