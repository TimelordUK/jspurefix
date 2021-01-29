import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The strike price message is used to exchange strike price *
* information for principal trades. It can also be used to  *
* exchange reference prices for agency trades.              *
*************************************************************
*/
export interface IListStrikePrice {
  StandardHeader: IStandardHeader
  ListID: string// 66
  TotNoStrikes: number// 422
  NoStrikes: number// 428
  Symbol: string// 55
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
  PrevClosePx?: number// 140
  ClOrdID?: string// 11
  Side?: string// 54
  Price: number// 44
  Currency?: string// 15
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
