import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRequestForPositions {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosReqID: string// [2] 710 (String)
  PosReqType: number// [3] 724 (Int)
  MatchStatus?: string// [4] 573 (String)
  SubscriptionRequestType?: string// [5] 263 (String)
  SettlCurrency?: string// [6] 120 (String)
  SettlCurrencyCodeSource?: string// [7] 2899 (String)
  Parties?: IParties// [8] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [9] 1 (String)
  AcctIDSource?: number// [10] 660 (Int)
  AccountType?: number// [11] 581 (Int)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  Currency?: string// [13] 15 (String)
  CurrencyCodeSource?: string// [14] 2897 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [15] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  UndInstrmtGrp?: IUndInstrmtGrp// [16] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  ClearingBusinessDate: Date// [17] 715 (LocalDate)
  SettlDate?: Date// [18] 64 (LocalDate)
  SettlSessID?: string// [19] 716 (String)
  SettlSessSubID?: string// [20] 717 (String)
  TrdgSesGrp?: ITrdgSesGrp// [21] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  TransactTime: Date// [22] 60 (UtcTimestamp)
  ResponseTransportType?: number// [23] 725 (Int)
  ResponseDestination?: string// [24] 726 (String)
  Text?: string// [25] 58 (String)
  EncodedTextLen?: number// [26] 354 (Length)
  EncodedText?: Buffer// [27] 355 (RawData)
  StandardTrailer: IStandardTrailer// [28] SignatureLength.93, Signature.89, CheckSum.10
}
