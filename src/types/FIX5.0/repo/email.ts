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
  StandardHeader: IStandardHeader
  EmailThreadID: string// 164
  EmailType: string// 94
  OrigTime?: Date// 42
  Subject: string// 147
  EncodedSubjectLen?: number// 356
  EncodedSubject?: Buffer// 357
  RoutingGrp?: IRoutingGrp[]
  InstrmtGrp?: IInstrmtGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  OrderID?: string// 37
  ClOrdID?: string// 11
  LinesOfTextGrp: ILinesOfTextGrp[]
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  StandardTrailer: IStandardTrailer
}
