import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The news message is a general free format message between *
* the broker and institution.                               *
*************************************************************
*/
export interface INews {
  StandardHeader: IStandardHeader
  OrigTime?: Date// 42
  Urgency?: string// 61
  Headline: string// 148
  EncodedHeadlineLen?: number// 358
  EncodedHeadline?: Buffer// 359
  NoRoutingIDs?: number// 215
  RoutingType?: number// 216
  RoutingID?: string// 217
  NoRelatedSym?: number// 146
  Instrument?: IInstrument
  LinesOfText: number// 33
  Text: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  URLLink?: string// 149
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  StandardTrailer: IStandardTrailer
}
