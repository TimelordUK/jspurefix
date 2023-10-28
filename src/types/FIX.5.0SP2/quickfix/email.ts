import { IStandardHeader } from './set/standard_header'
import { IRoutingGrp } from './set/routing_grp'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ILinesOfTextGrp } from './set/lines_of_text_grp'
import { IAttachmentGrp } from './set/attachment_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IEmail {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  EmailThreadID: string// [2] 164 (String)
  EmailType: string// [3] 94 (String)
  OrigTime?: Date// [4] 42 (UtcTimestamp)
  Subject: string// [5] 147 (String)
  EncodedSubjectLen?: number// [6] 356 (Length)
  EncodedSubject?: Buffer// [7] 357 (RawData)
  RoutingGrp?: IRoutingGrp// [8] NoRoutingIDs.215, RoutingType.216, RoutingID.217
  InstrmtGrp?: IInstrmtGrp// [9] NoRelatedSym.146, Symbol.55 .. RelatedToDividendPeriodXIDRef.2417
  UndInstrmtGrp?: IUndInstrmtGrp// [10] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [11] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  OrderID?: string// [12] 37 (String)
  ClOrdID?: string// [13] 11 (String)
  LinesOfTextGrp?: ILinesOfTextGrp// [14] NoLinesOfText.33, Text.58 .. EncodedText.355
  RawDataLength?: number// [15] 95 (Length)
  RawData?: Buffer// [16] 96 (RawData)
  AttachmentGrp?: IAttachmentGrp// [17] NoAttachments.2104, AttachmentName.2105 .. AttachmentKeyword.2114
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
}
