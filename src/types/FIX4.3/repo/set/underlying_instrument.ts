/*
****************************************************************
* The UnderlyingInstrument component block, like the           *
* Instrument component block, contains all the fields commonly *
* used to describe a security or instrument. In the case of    *
* the UnderlyingInstrument component block it describes an     *
* instrument which underlies the primary instrument Refer to   *
* the Instrument component block comments as this component    *
* block mirrors Instrument, except for the noted fields.       *
****************************************************************
*/
export interface IUnderlyingInstrument {
  UnderlyingSymbol?: string// 311
  UnderlyingSymbolSfx?: string// 312
  UnderlyingSecurityID?: string// 309
  UnderlyingIDSource?: string// 305
  UnderlyingSecurityType?: string// 310
  UnderlyingMaturityMonthYear?: string// 313
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
}
