import { IStandardHeader } from './set/standard_header'
import { IRoutingGrp } from './set/routing_grp'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ILinesOfTextGrp } from './set/lines_of_text_grp'
import { IAttachmentGrp } from './set/attachment_grp'

/*
*****************************************
* Email can be found in Volume 3 of the *
*                                       *
* specification                         *
*****************************************
*/
export interface IEmail {
  EmailThreadID: string// [2] 164 (String)
  EmailType: string// [2] 94 (String)
  OrigTime?: Date// [2] 42 (UtcTimestamp)
  Subject: string// [2] 147 (String)
  EncodedSubjectLen?: number// [2] 356 (Length)
  EncodedSubject?: Buffer// [2] 357 (RawData)
  OrderID?: string// [2] 37 (String)
  ClOrdID?: string// [2] 11 (String)
  RawDataLength?: number// [2] 95 (Length)
  RawData?: Buffer// [2] 96 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RoutingGrp?: IRoutingGrp[]// [2] RtgTyp.216, RtgID.217
  InstrmtGrp?: IInstrmtGrp[]// [3] 
  UndInstrmtGrp?: IUndInstrmtGrp[]// [4] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [5] Sym.600, Sfx.601 .. ExchLookAlike.2607
  LinesOfTextGrp?: ILinesOfTextGrp[]// [6] Txt.58, EncTxtLen.354, EncTxt.355
  AttachmentGrp?: IAttachmentGrp[]// [7] Name.2105, MediaTyp.2106 .. EncAttchmnt.2112
}
