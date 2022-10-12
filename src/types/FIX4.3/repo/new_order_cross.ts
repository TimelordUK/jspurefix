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
***********************************************
* Used to submit a cross order into a market. *
***********************************************
*/
export interface INewOrderCross {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  Side: string// [2] 54 (String)
  ClOrdID: string// [3] 11 (String)
  Parties?: IParties[]// [4] 
  Account?: string// [5] 1 (String)
  NoAllocs?: number// [6] 78 (Int)
  AllocAccount?: string// [7] 79 (String)
  NestedParties?: INestedParties[]// [8] 
  AllocShares?: number// [9] 80 (Float)
  OrderQtyData: IOrderQtyData// [10] OrderQty.38, CashOrderQty.152
  CommissionData?: ICommissionData// [11] Commission.12, CommType.13
  ForexReq?: boolean// [12] 121 (Boolean)
  SettlCurrency?: string// [13] 120 (String)
  Text?: string// [14] 58 (String)
  EncodedTextLen?: number// [15] 354 (Int)
  EncodedText?: Buffer// [16] 355 (RawData)
  OpenClose?: string// [17] 77 (String)
  CoveredOrUncovered?: number// [18] 203 (Int)
  SolicitedFlag?: boolean// [19] 377 (Boolean)
  Instrument: IInstrument// [20] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  SettlmntTyp?: string// [21] 63 (String)
  FutSettDate?: Date// [22] 64 (LocalDate)
  HandlInst: string// [23] 21 (String)
  ExecInst?: string// [24] 18 (String)
  MinQty?: number// [25] 110 (Float)
  MaxFloor?: number// [26] 111 (Float)
  ExDestination?: string// [27] 100 (String)
  NoTradingSessions?: number// [28] 386 (Int)
  TradingSessionID?: string// [29] 336 (String)
  ProcessCode?: string// [30] 81 (String)
  PrevClosePx?: number// [31] 140 (Float)
  LocateReqd?: boolean// [32] 114 (Boolean)
  TransactTime: Date// [33] 60 (UtcTimestamp)
  Stipulations?: IStipulations[]// [34] 
  OrdType: string// [35] 40 (String)
  PriceType?: number// [36] 423 (Int)
  Price?: number// [37] 44 (Float)
  StopPx?: number// [38] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [39] SpreadToBenchmark.218
  YieldData?: IYieldData// [40] 
  Currency?: string// [41] 15 (String)
  ComplianceID?: string// [42] 376 (String)
  IOIid?: string// [43] 23 (String)
  QuoteID?: string// [44] 117 (String)
  TimeInForce?: string// [45] 59 (String)
  EffectiveTime?: Date// [46] 168 (UtcTimestamp)
  ExpireDate?: Date// [47] 432 (LocalDate)
  ExpireTime?: Date// [48] 126 (UtcTimestamp)
  GTBookingInst?: number// [49] 427 (Int)
  MaxShow?: number// [50] 210 (Float)
  PegDifference?: number// [51] 211 (Float)
  DiscretionInst?: string// [52] 388 (String)
  DiscretionOffset?: number// [53] 389 (Float)
  AccruedInterestRate?: number// [54] 158 (Float)
  AccruedInterestAmt?: number// [55] 159 (Float)
  NetMoney?: number// [56] 118 (Float)
  StandardTrailer: IStandardTrailer// [57] SignatureLength.93, Signature.89, CheckSum.10
}
