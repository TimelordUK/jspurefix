import { IMassQuoteNoQuoteSetsNoQuoteEntries } from './mass_quote_no_quote_sets_no_quote_entries'

export interface IMassQuoteNoQuoteSets {
  QuoteSetID: string// [1] 302 (String)
  UnderlyingSymbol: string// [2] 311 (String)
  UnderlyingSymbolSfx?: string// [3] 312 (String)
  UnderlyingSecurityID?: string// [4] 309 (String)
  UnderlyingIDSource?: string// [5] 305 (String)
  UnderlyingSecurityType?: string// [6] 310 (String)
  UnderlyingMaturityMonthYear?: string// [7] 313 (String)
  UnderlyingMaturityDay?: string// [8] 314 (String)
  UnderlyingPutOrCall?: number// [9] 315 (Int)
  UnderlyingStrikePrice?: number// [10] 316 (Float)
  UnderlyingOptAttribute?: string// [11] 317 (String)
  UnderlyingContractMultiplier?: number// [12] 436 (Float)
  UnderlyingCouponRate?: number// [13] 435 (Float)
  UnderlyingSecurityExchange?: string// [14] 308 (String)
  UnderlyingIssuer?: string// [15] 306 (String)
  EncodedUnderlyingIssuerLen?: number// [16] 362 (Length)
  EncodedUnderlyingIssuer?: Buffer// [17] 363 (RawData)
  UnderlyingSecurityDesc?: string// [18] 307 (String)
  EncodedUnderlyingSecurityDescLen?: number// [19] 364 (Length)
  EncodedUnderlyingSecurityDesc?: Buffer// [20] 365 (RawData)
  QuoteSetValidUntilTime?: Date// [21] 367 (UtcTimestamp)
  TotQuoteEntries: number// [22] 304 (Int)
  NoQuoteEntries: IMassQuoteNoQuoteSetsNoQuoteEntries[]// [23] QuoteEntryID.299, Symbol.55 .. Currency.15
}
