import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Security Definition message is used for the following: *
* 1. Accept the security defined in a Security Definition    *
* message.                                                   *
* 2. Accept the security defined in a Security Definition    *
* message with changes to the definition and/or identity of  *
* the security.                                              *
* 3. Reject the security requested in a Security Definition  *
* message                                                    *
* 4. Return a list of Security Types                         *
* 5. Return a list of Securities                             *
**************************************************************
*/
export interface ISecurityDefinition {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityResponseType?: number// 323
  TotalNumSecurities: number// 393
  Symbol?: string// 55
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
  Currency?: string// 15
  TradingSessionID?: string// 336
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  NoRelatedSym?: number// 146
  UnderlyingSymbol?: string// 311
  UnderlyingSymbolSfx?: string// 312
  UnderlyingSecurityID?: string// 309
  UnderlyingIDSource?: string// 305
  UnderlyingSecurityType?: string// 310
  UnderlyingMaturityMonthYear?: string// 313
  UnderlyingMaturityDay?: number// 314
  UnderlyingPutOrCall?: number// 315
  UnderlyingStrikePrice?: number// 316
  UnderlyingOptAttribute?: string// 317
  UnderlyingContractMultiplier?: number// 436
  UnderlyingCouponRate?: number// 435
  UnderlyingSecurityExchange?: string// 308
  UnderlyingIssuer?: string// 306
  EncodedUnderlyingIssuerLen?: number// 362
  EncodedUnderlyingIssuer?: Buffer// 363
  UnderlyingSecurityDesc?: string// 307
  EncodedUnderlyingSecurityDescLen?: number// 364
  EncodedUnderlyingSecurityDesc?: Buffer// 365
  RatioQty?: number// 319
  Side?: string// 54
  UnderlyingCurrency?: string// 318
  StandardTrailer: IStandardTrailer
}
