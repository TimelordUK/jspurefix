import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { INestedParties } from './set/nested_parties'
import { IOrderQtyData } from './set/order_qty_data'
import { ICommissionData } from './set/commission_data'
import { IInstrument } from './set/instrument'
import { IStipulations } from './set/stipulations'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* Used to modify a cross order previously submitted using the *
* New Order - Cross message.                                  *
***************************************************************
*/
export interface ICrossOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader
  OrderID?: string// 37
  Side: string// 54
  OrigClOrdID: string// 41
  ClOrdID: string// 11
  Parties?: IParties[]
  Account?: string// 1
  NoAllocs?: number// 78
  AllocAccount?: string// 79
  NestedParties?: INestedParties[]
  AllocShares?: number// 80
  OrderQtyData: IOrderQtyData
  CommissionData?: ICommissionData
  ForexReq?: boolean// 121
  SettlCurrency?: string// 120
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  OpenClose?: string// 77
  CoveredOrUncovered?: number// 203
  SolicitedFlag?: boolean// 377
  Instrument: IInstrument
  SettlmntTyp?: string// 63
  FutSettDate?: Date// 64
  HandlInst: string// 21
  ExecInst?: string// 18
  MinQty?: number// 110
  MaxFloor?: number// 111
  ExDestination?: string// 100
  NoTradingSessions?: number// 386
  TradingSessionID?: string// 336
  ProcessCode?: string// 81
  PrevClosePx?: number// 140
  LocateReqd?: boolean// 114
  TransactTime: Date// 60
  Stipulations?: IStipulations[]
  OrdType: string// 40
  PriceType?: number// 423
  Price?: number// 44
  StopPx?: number// 99
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  Currency?: string// 15
  ComplianceID?: string// 376
  IOIid?: string// 23
  QuoteID?: string// 117
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  GTBookingInst?: number// 427
  MaxShow?: number// 210
  PegDifference?: number// 211
  DiscretionInst?: string// 388
  DiscretionOffset?: number// 389
  AccruedInterestRate?: number// 158
  AccruedInterestAmt?: number// 159
  NetMoney?: number// 118
  StandardTrailer: IStandardTrailer
}
