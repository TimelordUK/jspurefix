import { IStandardHeader } from './set/standard_header'
import { IRoutingGrp } from './set/routing_grp'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ILinesOfTextGrp } from './set/lines_of_text_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface INews {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrigTime?: Date// [2] 42 (UtcTimestamp)
  Urgency?: string// [3] 61 (String)
  Headline: string// [4] 148 (String)
  EncodedHeadlineLen?: number// [5] 358 (Length)
  EncodedHeadline?: Buffer// [6] 359 (RawData)
  RoutingGrp?: IRoutingGrp// [7] NoRoutingIDs.215, RoutingType.216, RoutingID.217
  InstrmtGrp?: IInstrmtGrp// [8] NoRelatedSym.146, Symbol.55 .. InterestAccrualDate.874
  InstrmtLegGrp?: IInstrmtLegGrp// [9] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  UndInstrmtGrp?: IUndInstrmtGrp// [10] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  LinesOfTextGrp?: ILinesOfTextGrp// [11] NoLinesOfText.33, Text.58 .. EncodedText.355
  URLLink?: string// [12] 149 (String)
  RawDataLength?: number// [13] 95 (Length)
  RawData?: Buffer// [14] 96 (RawData)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
