import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IRoutingGrp } from './set/routing_grp'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ILinesOfTextGrp } from './set/lines_of_text_grp'
import { IStandardTrailer } from './set/standard_trailer'
import { INewsRefGrp } from './set/news_ref_grp'

/*
****************************************************************
* The news message is a general free format message between    *
* the broker and institution. The message contains flags to    *
* identify the news item's urgency and to allow sorting by     *
* subject company (symbol). The News message can be originated *
* at either the broker or institution side, or exchanges and   *
* other marketplace venues.                                    *
****************************************************************
*/
export interface INews {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  OrigTime?: Date// [3] 42 (UtcTimestamp)
  Urgency?: string// [4] 61 (String)
  Headline: string// [5] 148 (String)
  EncodedHeadlineLen?: number// [6] 358 (Int)
  EncodedHeadline?: Buffer// [7] 359 (RawData)
  RoutingGrp?: IRoutingGrp[]// [8] RoutingType.216, RoutingID.217
  InstrmtGrp?: IInstrmtGrp[]// [9] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrmtLegGrp?: IInstrmtLegGrp// [10] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  UndInstrmtGrp?: IUndInstrmtGrp// [11] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  LinesOfTextGrp: ILinesOfTextGrp[]// [12] Text.58, EncodedTextLen.354, EncodedText.355
  URLLink?: string// [13] 149 (String)
  RawDataLength?: number// [14] 95 (Int)
  RawData?: Buffer// [15] 96 (RawData)
  StandardTrailer: IStandardTrailer// [16] SignatureLength.93, Signature.89, CheckSum.10
  NewsID?: string// [17] 1472 (String)
  NewsRefGrp?: INewsRefGrp[]// [18] NewsRefID.1476, NewsRefType.1477
  NewsCategory?: number// [19] 1473 (Int)
  LanguageCode?: string// [20] 1474 (String)
  MarketID?: string// [21] 1301 (String)
  MarketSegmentID?: string// [22] 1300 (String)
}
