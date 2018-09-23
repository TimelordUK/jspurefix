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
  EmailThreadID: string// 164
  EmailType: string// 94
  OrigTime?: Date// 42
  Subject: string// 147
  EncodedSubjectLen?: string// 356
  EncodedSubject?: Buffer// 357
  NotAffectedOrderID?: string// 1371
  ClOrdID?: string// 11
  RawDataLength?: string// 95
  RawData?: Buffer// 96
  StandardHeader?: IStandardHeader
  RoutingGrp?: IRoutingGrp[]
  InstrmtGrp?: IInstrmtGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  LinesOfTextGrp?: ILinesOfTextGrp[]
  AttachmentGrp?: IAttachmentGrp[]
}
