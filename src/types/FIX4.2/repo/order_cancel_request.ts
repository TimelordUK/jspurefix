import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The order cancel request message requests the cancellation *
* of all of the remaining quantity of an existing order.     *
**************************************************************
*/
export interface IOrderCancelRequest {
  StandardHeader: IStandardHeader
  OrigClOrdID: string// 41
  OrderID?: string// 37
  ClOrdID: string// 11
  ListID?: string// 66
  Account?: string// 1
  ClientID?: string// 109
  ExecBroker?: string// 76
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
  Side: string// 54
  TransactTime: Date// 60
  OrderQty?: number// 38
  CashOrderQty?: number// 152
  ComplianceID?: string// 376
  SolicitedFlag?: boolean// 377
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
