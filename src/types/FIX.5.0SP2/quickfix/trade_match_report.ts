import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrmtMatchSideGrp } from './set/instrmt_match_side_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeMatchReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  TrdMatchID: string// [3] 880 (String)
  MatchType?: string// [4] 574 (String)
  TradeReportType?: number// [5] 856 (Int)
  ClearingBusinessDate?: Date// [6] 715 (LocalDate)
  TrdType?: number// [7] 828 (Int)
  TrdSubType?: number// [8] 829 (Int)
  TradeDate?: Date// [9] 75 (LocalDate)
  MarketID?: string// [10] 1301 (String)
  MarketSegmentID?: string// [11] 1300 (String)
  TradingSessionID?: string// [12] 336 (String)
  TradingSessionSubID?: string// [13] 625 (String)
  VenueType?: string// [14] 1430 (String)
  TradeMatchTimestamp?: Date// [15] 1888 (UtcTimestamp)
  TransactTime?: Date// [16] 60 (UtcTimestamp)
  MultiLegReportingType?: string// [17] 442 (String)
  InstrmtMatchSideGrp?: IInstrmtMatchSideGrp// [18] NoInstrmtMatchSides.1889, Symbol.55 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [19] SignatureLength.93, Signature.89, CheckSum.10
}
