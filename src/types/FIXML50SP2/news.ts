import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { INewsRefGrp } from './set/news_ref_grp'
import { IRoutingGrp } from './set/routing_grp'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ILinesOfTextGrp } from './set/lines_of_text_grp'

/*
****************************************
* News can be found in Volume 3 of the *
*                                      *
* specification                        *
****************************************
*/
export interface INews {
  NewsID?: string// [2] 1472 (String)
  NewsCategory?: number// [2] 1473 (Int)
  LanguageCode?: string// [2] 1474 (String)
  OrigTime?: Date// [2] 42 (UtcTimestamp)
  Urgency?: string// [2] 61 (String)
  Headline: string// [2] 148 (String)
  EncodedHeadlineLen?: number// [2] 358 (Length)
  EncodedHeadline?: Buffer// [2] 359 (RawData)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  URLLink?: string// [2] 149 (String)
  RawDataLength?: number// [2] 95 (Length)
  RawData?: Buffer// [2] 96 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  NewsRefGrp?: INewsRefGrp[]// [3] RefID.1476, RefTyp.1477
  RoutingGrp?: IRoutingGrp[]// [4] RtgTyp.216, RtgID.217
  InstrmtGrp?: IInstrmtGrp[]// [5] 
  InstrmtLegGrp?: IInstrmtLegGrp[]// [6] Sym.600, Sfx.601 .. ExchLookAlike.2607
  UndInstrmtGrp?: IUndInstrmtGrp[]// [7] Sym.311, Sfx.312 .. XID.2631
  LinesOfTextGrp?: ILinesOfTextGrp[]// [8] Txt.58, EncTxtLen.354, EncTxt.355
}
