import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrumentScope } from './set/instrument_scope'
import { ISecMassStatGrp } from './set/sec_mass_stat_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityMassStatus {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityStatusReqID?: string// [3] 324 (String)
  SecurityListID?: string// [4] 1465 (String)
  MarketID?: string// [5] 1301 (String)
  MarketSegmentID?: string// [6] 1300 (String)
  TradeDate?: Date// [7] 75 (LocalDate)
  TradingSessionID?: string// [8] 336 (String)
  TradingSessionSubID?: string// [9] 625 (String)
  InstrumentScope?: IInstrumentScope// [10] InstrumentScopeSymbol.1536, InstrumentScopeSymbolSfx.1537 .. InstrumentScopeSettlType.1557
  UnsolicitedIndicator?: boolean// [11] 325 (Boolean)
  SecurityMassTradingStatus?: number// [12] 1679 (Int)
  FastMarketIndicator?: boolean// [13] 2447 (Boolean)
  SecurityMassTradingEvent?: number// [14] 1680 (Int)
  MassHaltReason?: number// [15] 1681 (Int)
  MDBookType?: number// [16] 1021 (Int)
  MarketDepth?: number// [17] 264 (Int)
  TransactTime?: Date// [18] 60 (UtcTimestamp)
  Adjustment?: number// [19] 334 (Int)
  SecMassStatGrp?: ISecMassStatGrp// [20] NoRelatedSym.146, Symbol.55 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [21] SignatureLength.93, Signature.89, CheckSum.10
}
