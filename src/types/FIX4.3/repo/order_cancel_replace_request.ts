import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { INestedParties } from './set/nested_parties'
import { IInstrument } from './set/instrument'
import { IOrderQtyData } from './set/order_qty_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { ICommissionData } from './set/commission_data'
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
  Parties?: IParties[]
  OrigClOrdID: string// 41
  ClOrdID: string// 11
  ListID?: string// 66
  Account?: string// 1
  NoAllocs?: number// 78
  AllocAccount?: string// 79
  NestedParties?: INestedParties[]
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
  Instrument: IInstrument
  Side: string// 54
  TransactTime: Date// 60
  OrderQtyData: IOrderQtyData
  OrdType: string// 40
  PriceType?: number// 423
  Price?: number// 44
  StopPx?: number// 99
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  PegDifference?: number// 211
  DiscretionInst?: string// 388
  DiscretionOffset?: number// 389
  ComplianceID?: string// 376
  SolicitedFlag?: boolean// 377
  Currency?: number// 15
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  GTBookingInst?: number// 427
  CommissionData?: ICommissionData
  Rule80A?: string// 47
  ForexReq?: boolean// 121
  SettlCurrency?: number// 120
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  FutSettDate2?: Date// 193
  OrderQty2?: number// 192
  OpenClose?: string// 77
  CoveredOrUncovered?: number// 203
  MaxShow?: number// 210
  LocateReqd?: boolean// 114
  AccruedInterestRate?: number// 158
  AccruedInterestAmt?: number// 159
  NetMoney?: number// 118
  StandardTrailer: IStandardTrailer
}
