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
  NewsID?: string// 1472
  NewsCategory?: number// 1473
  LanguageCode?: string// 1474
  OrigTime?: Date// 42
  Urgency?: string// 61
  Headline: string// 148
  EncodedHeadlineLen?: number// 358
  EncodedHeadline?: Buffer// 359
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  URLLink?: string// 149
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  NewsRefGrp?: INewsRefGrp[]
  RoutingGrp?: IRoutingGrp[]
  InstrmtGrp?: IInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
  LinesOfTextGrp?: ILinesOfTextGrp[]
}
