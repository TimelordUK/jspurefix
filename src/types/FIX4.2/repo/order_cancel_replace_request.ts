import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
**********************************************************
* The order cancel/replace request is used to change the *
* parameters of an existing order.                       *
**********************************************************
*/
export interface IOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader
  OrderID?: string// 37
  ClientID?: string// 109
  ExecBroker?: string// 76
  OrigClOrdID: string// 41
  ClOrdID: string// 11
  ListID?: string// 66
  Account?: string// 1
  NoAllocs?: number// 78
  AllocAccount?: string// 79
  AllocShares?: number// 80
  SettlmntTyp?: string// 63
  FutSettDate?: Date// 64
  HandlInst: string// 21
  ExecInst?: string// 18
  MinQty?: number// 110
  MaxFloor?: number// 111
  ExDestination?: string// 100
  NoTradingSessions?: number// 386
  TradingSessionID?: string// 336
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
  OrdType: string// 40
  Price?: number// 44
  StopPx?: number// 99
  PegDifference?: number// 211
  DiscretionInst?: string// 388
  DiscretionOffset?: number// 389
  ComplianceID?: string// 376
  SolicitedFlag?: boolean// 377
  Currency?: string// 15
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  GTBookingInst?: number// 427
  Commission?: number// 12
  CommType?: string// 13
  Rule80A?: string// 47
  ForexReq?: boolean// 121
  SettlCurrency?: string// 120
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  FutSettDate2?: Date// 193
  OrderQty2?: number// 192
  OpenClose?: string// 77
  CoveredOrUncovered?: number// 203
  CustomerOrFirm?: number// 204
  MaxShow?: number// 210
  LocateReqd?: boolean// 114
  ClearingFirm?: string// 439
  ClearingAccount?: string// 440
  StandardTrailer: IStandardTrailer
}
