import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRequestForPositionsAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosMaintRptID: string// [2] 721 (String)
  PosReqID?: string// [3] 710 (String)
  TotalNumPosReports?: number// [4] 727 (Int)
  TotNumReports?: number// [5] 911 (Int)
  UnsolicitedIndicator?: boolean// [6] 325 (Boolean)
  PosReqResult: number// [7] 728 (Int)
  PosReqStatus: number// [8] 729 (Int)
  PosReqType?: number// [9] 724 (Int)
  MatchStatus?: string// [10] 573 (String)
  ClearingBusinessDate?: Date// [11] 715 (LocalDate)
  SubscriptionRequestType?: string// [12] 263 (String)
  SettlSessID?: string// [13] 716 (String)
  SettlSessSubID?: string// [14] 717 (String)
  SettlCurrency?: string// [15] 120 (String)
  SettlCurrencyCodeSource?: string// [16] 2899 (String)
  Parties?: IParties// [17] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [18] 1 (String)
  AcctIDSource?: number// [19] 660 (Int)
  AccountType?: number// [20] 581 (Int)
  Instrument?: IInstrument// [21] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  Currency?: string// [22] 15 (String)
  CurrencyCodeSource?: string// [23] 2897 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [24] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  UndInstrmtGrp?: IUndInstrmtGrp// [25] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  ResponseTransportType?: number// [26] 725 (Int)
  ResponseDestination?: string// [27] 726 (String)
  Text?: string// [28] 58 (String)
  EncodedTextLen?: number// [29] 354 (Length)
  EncodedText?: Buffer// [30] 355 (RawData)
  StandardTrailer: IStandardTrailer// [31] SignatureLength.93, Signature.89, CheckSum.10
}
