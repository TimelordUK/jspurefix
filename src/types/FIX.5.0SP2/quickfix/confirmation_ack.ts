import { IStandardHeader } from './set/standard_header'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IMatchExceptionGrp } from './set/match_exception_grp'
import { IMatchingDataPointGrp } from './set/matching_data_point_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IConfirmationAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ConfirmID: string// [2] 664 (String)
  TradeDate: Date// [3] 75 (LocalDate)
  TransactTime: Date// [4] 60 (UtcTimestamp)
  AffirmStatus: number// [5] 940 (Int)
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [6] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  TradeConfirmationReferenceID?: string// [7] 2390 (String)
  ConfirmRejReason?: number// [8] 774 (Int)
  MatchStatus?: string// [9] 573 (String)
  MatchExceptionGrp?: IMatchExceptionGrp// [10] NoMatchExceptions.2772, MatchExceptionType.2773 .. EncodedMatchExceptionText.2798
  MatchingDataPointGrp?: IMatchingDataPointGrp// [11] NoMatchingDataPoints.2781, MatchingDataPointIndicator.2782 .. MatchingDataPointName.2785
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Length)
  EncodedText?: Buffer// [14] 355 (RawData)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
