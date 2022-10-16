import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrderID?: string// [2] 37 (String)
  ClOrdID: string// [3] 11 (String)
  ClientID?: string// [4] 109 (String)
  Account?: string// [5] 1 (String)
  ExecBroker?: string// [6] 76 (String)
  Symbol: string// [7] 55 (String)
  SymbolSfx?: string// [8] 65 (String)
  SecurityID?: string// [9] 48 (String)
  IDSource?: string// [10] 22 (String)
  SecurityType?: string// [11] 167 (String)
  MaturityMonthYear?: string// [12] 200 (String)
  MaturityDay?: string// [13] 205 (String)
  PutOrCall?: number// [14] 201 (Int)
  StrikePrice?: number// [15] 202 (Float)
  OptAttribute?: string// [16] 206 (String)
  ContractMultiplier?: number// [17] 231 (Float)
  CouponRate?: number// [18] 223 (Float)
  SecurityExchange?: string// [19] 207 (String)
  Issuer?: string// [20] 106 (String)
  EncodedIssuerLen?: number// [21] 348 (Length)
  EncodedIssuer?: Buffer// [22] 349 (RawData)
  SecurityDesc?: string// [23] 107 (String)
  EncodedSecurityDescLen?: number// [24] 350 (Length)
  EncodedSecurityDesc?: Buffer// [25] 351 (RawData)
  Side: string// [26] 54 (String)
  StandardTrailer: IStandardTrailer// [27] SignatureLength.93, Signature.89, CheckSum.10
}
