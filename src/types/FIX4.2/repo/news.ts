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
  OrigTime?: Date// 42
  Urgency?: string// 61
  Headline: string// 148
  EncodedHeadlineLen?: number// 358
  EncodedHeadline?: Buffer// 359
  NoRoutingIDs?: number// 215
  RoutingType?: number// 216
  RoutingID?: string// 217
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
  ContractMultiplier?: number// 231
  CouponRate?: number// 223
  SecurityExchange?: string// 207
  Issuer?: string// 106
  EncodedIssuerLen?: number// 348
  EncodedIssuer?: Buffer// 349
  SecurityDesc?: string// 107
  EncodedSecurityDescLen?: number// 350
  EncodedSecurityDesc?: Buffer// 351
  LinesOfText: number// 33
  Text: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  URLLink?: string// 149
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  StandardTrailer: IStandardTrailer
}
