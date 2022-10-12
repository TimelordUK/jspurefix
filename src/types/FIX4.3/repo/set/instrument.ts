/*
****************************************************************
* The Instrument component block contains all the fields       *
* commonly used to describe a security or instrument.          *
* Typically the data elements in this component block are      *
* considered the static data of a security, data that may be   *
* commonly found in a security master database. The Instrument *
* component block can be used to describe any asset type       *
* supported by FIX.                                            *
****************************************************************
*/
export interface IInstrument {
  Symbol?: string// [1] 55 (String)
  SymbolSfx?: string// [2] 65 (String)
  SecurityID?: string// [3] 48 (String)
  IDSource?: string// [4] 22 (String)
  SecurityType?: string// [5] 167 (String)
  MaturityMonthYear?: string// [6] 200 (String)
  StrikePrice?: number// [7] 202 (Float)
  OptAttribute?: string// [8] 206 (String)
  ContractMultiplier?: number// [9] 231 (Float)
  CouponRate?: number// [10] 223 (Float)
  SecurityExchange?: string// [11] 207 (String)
  Issuer?: string// [12] 106 (String)
  EncodedIssuerLen?: number// [13] 348 (Int)
  EncodedIssuer?: Buffer// [14] 349 (RawData)
  SecurityDesc?: string// [15] 107 (String)
  EncodedSecurityDescLen?: number// [16] 350 (Int)
  EncodedSecurityDesc?: Buffer// [17] 351 (RawData)
}
