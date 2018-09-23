import { IRoutingGrp } from './set/routing_grp'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ILinesOfTextGrp } from './set/lines_of_text_grp'

export interface INews {
  OrigTime?: Date// 42
  Urgency?: string// 61
  Headline: string// 148
  EncodedHeadlineLen?: number// 358
  EncodedHeadline?: Buffer// 359
  RoutingGrp?: IRoutingGrp
  InstrmtGrp?: IInstrmtGrp
  InstrmtLegGrp?: IInstrmtLegGrp
  UndInstrmtGrp?: IUndInstrmtGrp
  LinesOfTextGrp?: ILinesOfTextGrp
  URLLink?: string// 149
  RawDataLength?: number// 95
  RawData?: Buffer// 96
}
