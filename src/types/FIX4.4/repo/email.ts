import { IStandardHeader } from './set/standard_header'
import { IRoutingGrp } from './set/routing_grp'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ILinesOfTextGrp } from './set/lines_of_text_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The email message is similar to the format and purpose of *
* the News message, however, it is intended for private use *
* between two parties.                                      *
*************************************************************
*/
export interface IEmail {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  EmailThreadID: string// [2] 164 (String)
  EmailType: string// [3] 94 (String)
  OrigTime?: Date// [4] 42 (UtcTimestamp)
  Subject: string// [5] 147 (String)
  EncodedSubjectLen?: number// [6] 356 (Int)
  EncodedSubject?: Buffer// [7] 357 (RawData)
  RoutingGrp?: IRoutingGrp[]// [8] RoutingType.216, RoutingID.217
  InstrmtGrp?: IInstrmtGrp[]// [9] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp?: IUndInstrmtGrp[]// [10] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp[]// [11] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  OrderID?: string// [12] 37 (String)
  ClOrdID?: string// [13] 11 (String)
  LinesOfTextGrp: ILinesOfTextGrp[]// [14] Text.58, EncodedTextLen.354, EncodedText.355
  RawDataLength?: number// [15] 95 (Int)
  RawData?: Buffer// [16] 96 (RawData)
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
