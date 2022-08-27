import { IStandardHeader } from './set/standard_header'
import { IRoutingGrp } from './set/routing_grp'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ILinesOfTextGrp } from './set/lines_of_text_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The news message is a general free format message between *
* the broker and institution.                               *
*************************************************************
*/
export interface INews {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrigTime?: Date// [2] 42 (UtcTimestamp)
  Urgency?: string// [3] 61 (String)
  Headline: string// [4] 148 (String)
  EncodedHeadlineLen?: number// [5] 358 (Int)
  EncodedHeadline?: Buffer// [6] 359 (RawData)
  RoutingGrp?: IRoutingGrp[]// [7] RoutingType.216, RoutingID.217
  InstrmtGrp?: IInstrmtGrp[]// [8] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  InstrmtLegGrp?: IInstrmtLegGrp[]// [9] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  UndInstrmtGrp?: IUndInstrmtGrp[]// [10] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  LinesOfTextGrp: ILinesOfTextGrp[]// [11] Text.58, EncodedTextLen.354, EncodedText.355
  URLLink?: string// [12] 149 (String)
  RawDataLength?: number// [13] 95 (Int)
  RawData?: Buffer// [14] 96 (RawData)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
