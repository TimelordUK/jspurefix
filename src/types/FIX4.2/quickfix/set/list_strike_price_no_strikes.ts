export interface IListStrikePriceNoStrikes {
  Symbol: string// [1] 55 (String)
  SymbolSfx?: string// [2] 65 (String)
  SecurityID?: string// [3] 48 (String)
  IDSource?: string// [4] 22 (String)
  SecurityType?: string// [5] 167 (String)
  MaturityMonthYear?: string// [6] 200 (String)
  MaturityDay?: string// [7] 205 (String)
  PutOrCall?: number// [8] 201 (Int)
  StrikePrice?: number// [9] 202 (Float)
  OptAttribute?: string// [10] 206 (String)
  ContractMultiplier?: number// [11] 231 (Float)
  CouponRate?: number// [12] 223 (Float)
  SecurityExchange?: string// [13] 207 (String)
  Issuer?: string// [14] 106 (String)
  EncodedIssuerLen?: number// [15] 348 (Length)
  EncodedIssuer?: Buffer// [16] 349 (RawData)
  SecurityDesc?: string// [17] 107 (String)
  EncodedSecurityDescLen?: number// [18] 350 (Length)
  EncodedSecurityDesc?: Buffer// [19] 351 (RawData)
  PrevClosePx?: number// [20] 140 (Float)
  ClOrdID?: string// [21] 11 (String)
  Side?: string// [22] 54 (String)
  Price: number// [23] 44 (Float)
  Currency?: string// [24] 15 (String)
  Text?: string// [25] 58 (String)
  EncodedTextLen?: number// [26] 354 (Length)
  EncodedText?: Buffer// [27] 355 (RawData)
}
