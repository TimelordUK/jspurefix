import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { INewsRefGrp } from './set/news_ref_grp'
import { IRoutingGrp } from './set/routing_grp'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ILinesOfTextGrp } from './set/lines_of_text_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface INews {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  NewsID?: string// [3] 1472 (String)
  NewsRefGrp?: INewsRefGrp// [4] NoNewsRefIDs.1475, NewsRefID.1476, NewsRefType.1477
  NewsCategory?: number// [5] 1473 (Int)
  LanguageCode?: string// [6] 1474 (String)
  OrigTime?: Date// [7] 42 (UtcTimestamp)
  Urgency?: string// [8] 61 (String)
  Headline: string// [9] 148 (String)
  EncodedHeadlineLen?: number// [10] 358 (Length)
  EncodedHeadline?: Buffer// [11] 359 (RawData)
  RoutingGrp?: IRoutingGrp// [12] NoRoutingIDs.215, RoutingType.216, RoutingID.217
  MarketID?: string// [13] 1301 (String)
  MarketSegmentID?: string// [14] 1300 (String)
  InstrmtGrp?: IInstrmtGrp// [15] NoRelatedSym.146, Symbol.55 .. RelatedToDividendPeriodXIDRef.2417
  InstrmtLegGrp?: IInstrmtLegGrp// [16] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  UndInstrmtGrp?: IUndInstrmtGrp// [17] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  LinesOfTextGrp?: ILinesOfTextGrp// [18] NoLinesOfText.33, Text.58 .. EncodedText.355
  URLLink?: string// [19] 149 (String)
  RawDataLength?: number// [20] 95 (Length)
  RawData?: Buffer// [21] 96 (RawData)
  StandardTrailer: IStandardTrailer// [22] SignatureLength.93, Signature.89, CheckSum.10
}
