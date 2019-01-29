import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
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
  NoRoutingIDs?: number// 215
  RoutingType?: number// 216
  RoutingID?: string// 217
  NoRelatedSym?: number// 146
  Instrument?: IInstrument
  OrderID?: string// 37
  ClOrdID?: string// 11
  LinesOfText: number// 33
  Text: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  StandardTrailer: IStandardTrailer
}
