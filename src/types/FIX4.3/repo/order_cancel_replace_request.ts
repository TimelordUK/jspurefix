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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrderID?: string// [2] 37 (String)
  Parties?: IParties[]// [3] 
  OrigClOrdID: string// [4] 41 (String)
  ClOrdID: string// [5] 11 (String)
  ListID?: string// [6] 66 (String)
  Account?: string// [7] 1 (String)
  NoAllocs?: number// [8] 78 (Int)
  AllocAccount?: string// [9] 79 (String)
  NestedParties?: INestedParties[]// [10] 
  AllocShares?: number// [11] 80 (Float)
  SettlmntTyp?: string// [12] 63 (String)
  FutSettDate?: Date// [13] 64 (LocalDate)
  HandlInst: string// [14] 21 (String)
  ExecInst?: string// [15] 18 (String)
  MinQty?: number// [16] 110 (Float)
  MaxFloor?: number// [17] 111 (Float)
  ExDestination?: string// [18] 100 (String)
  NoTradingSessions?: number// [19] 386 (Int)
  TradingSessionID?: string// [20] 336 (String)
  Instrument: IInstrument// [21] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Side: string// [22] 54 (String)
  TransactTime: Date// [23] 60 (UtcTimestamp)
  OrderQtyData: IOrderQtyData// [24] OrderQty.38, CashOrderQty.152
  OrdType: string// [25] 40 (String)
  PriceType?: number// [26] 423 (Int)
  Price?: number// [27] 44 (Float)
  StopPx?: number// [28] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [29] SpreadToBenchmark.218
  YieldData?: IYieldData// [30] 
  PegDifference?: number// [31] 211 (Float)
  DiscretionInst?: string// [32] 388 (String)
  DiscretionOffset?: number// [33] 389 (Float)
  ComplianceID?: string// [34] 376 (String)
  SolicitedFlag?: boolean// [35] 377 (Boolean)
  Currency?: string// [36] 15 (String)
  TimeInForce?: string// [37] 59 (String)
  EffectiveTime?: Date// [38] 168 (UtcTimestamp)
  ExpireDate?: Date// [39] 432 (LocalDate)
  ExpireTime?: Date// [40] 126 (UtcTimestamp)
  GTBookingInst?: number// [41] 427 (Int)
  CommissionData?: ICommissionData// [42] Commission.12, CommType.13
  Rule80A?: string// [43] 47 (String)
  ForexReq?: boolean// [44] 121 (Boolean)
  SettlCurrency?: string// [45] 120 (String)
  Text?: string// [46] 58 (String)
  EncodedTextLen?: number// [47] 354 (Int)
  EncodedText?: Buffer// [48] 355 (RawData)
  FutSettDate2?: Date// [49] 193 (LocalDate)
  OrderQty2?: number// [50] 192 (Float)
  OpenClose?: string// [51] 77 (String)
  CoveredOrUncovered?: number// [52] 203 (Int)
  MaxShow?: number// [53] 210 (Float)
  LocateReqd?: boolean// [54] 114 (Boolean)
  AccruedInterestRate?: number// [55] 158 (Float)
  AccruedInterestAmt?: number// [56] 159 (Float)
  NetMoney?: number// [57] 118 (Float)
  StandardTrailer: IStandardTrailer// [58] SignatureLength.93, Signature.89, CheckSum.10
}
