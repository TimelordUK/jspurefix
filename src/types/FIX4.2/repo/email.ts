import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The email message is similar to the format and purpose of to *
* the News message, however, it is intended for private use    *
* between two parties.                                         *
****************************************************************
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
