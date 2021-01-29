import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The news message is a general free format message between *
* the broker and institution.                               *
*************************************************************
*/
export interface INews {
  StandardHeader: IStandardHeader
  OrigTime?: string// 42
  Urgency?: string// 61
  Headline: string// 148
  NoRelatedSym?: number// 146
  RelatdSym?: string// 46
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  IDSource?: string// 22
  SecurityType?: string// 167
  MaturityMonthYear?: string// 200
  MaturityDay?: number// 205
  PutOrCall?: number// 201
  StrikePrice?: number// 202
  OptAttribute?: string// 206
  SecurityExchange?: string// 207
  Issuer?: string// 106
  SecurityDesc?: string// 107
  LinesOfText: number// 33
  Text: string// 58
  URLLink?: string// 149
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  StandardTrailer: IStandardTrailer
}
