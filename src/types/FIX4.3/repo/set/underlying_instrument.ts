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
  UnderlyingSymbol?: string// [1] 311 (String)
  UnderlyingSymbolSfx?: string// [2] 312 (String)
  UnderlyingSecurityID?: string// [3] 309 (String)
  UnderlyingIDSource?: string// [4] 305 (String)
  UnderlyingSecurityType?: string// [5] 310 (String)
  UnderlyingMaturityMonthYear?: string// [6] 313 (String)
  UnderlyingPutOrCall?: number// [7] 315 (Int)
  UnderlyingStrikePrice?: number// [8] 316 (Float)
  UnderlyingOptAttribute?: string// [9] 317 (String)
  UnderlyingContractMultiplier?: number// [10] 436 (Float)
  UnderlyingCouponRate?: number// [11] 435 (Float)
  UnderlyingSecurityExchange?: string// [12] 308 (String)
  UnderlyingIssuer?: string// [13] 306 (String)
  EncodedUnderlyingIssuerLen?: number// [14] 362 (Int)
  EncodedUnderlyingIssuer?: Buffer// [15] 363 (RawData)
  UnderlyingSecurityDesc?: string// [16] 307 (String)
  EncodedUnderlyingSecurityDescLen?: number// [17] 364 (Int)
  EncodedUnderlyingSecurityDesc?: Buffer// [18] 365 (RawData)
}
