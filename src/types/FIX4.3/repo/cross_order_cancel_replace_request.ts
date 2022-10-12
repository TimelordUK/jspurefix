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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrderID?: string// [2] 37 (String)
  Side: string// [3] 54 (String)
  OrigClOrdID: string// [4] 41 (String)
  ClOrdID: string// [5] 11 (String)
  Parties?: IParties[]// [6] 
  Account?: string// [7] 1 (String)
  NoAllocs?: number// [8] 78 (Int)
  AllocAccount?: string// [9] 79 (String)
  NestedParties?: INestedParties[]// [10] 
  AllocShares?: number// [11] 80 (Float)
  OrderQtyData: IOrderQtyData// [12] OrderQty.38, CashOrderQty.152
  CommissionData?: ICommissionData// [13] Commission.12, CommType.13
  ForexReq?: boolean// [14] 121 (Boolean)
  SettlCurrency?: string// [15] 120 (String)
  Text?: string// [16] 58 (String)
  EncodedTextLen?: number// [17] 354 (Int)
  EncodedText?: Buffer// [18] 355 (RawData)
  OpenClose?: string// [19] 77 (String)
  CoveredOrUncovered?: number// [20] 203 (Int)
  SolicitedFlag?: boolean// [21] 377 (Boolean)
  Instrument: IInstrument// [22] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  SettlmntTyp?: string// [23] 63 (String)
  FutSettDate?: Date// [24] 64 (LocalDate)
  HandlInst: string// [25] 21 (String)
  ExecInst?: string// [26] 18 (String)
  MinQty?: number// [27] 110 (Float)
  MaxFloor?: number// [28] 111 (Float)
  ExDestination?: string// [29] 100 (String)
  NoTradingSessions?: number// [30] 386 (Int)
  TradingSessionID?: string// [31] 336 (String)
  ProcessCode?: string// [32] 81 (String)
  PrevClosePx?: number// [33] 140 (Float)
  LocateReqd?: boolean// [34] 114 (Boolean)
  TransactTime: Date// [35] 60 (UtcTimestamp)
  Stipulations?: IStipulations[]// [36] 
  OrdType: string// [37] 40 (String)
  PriceType?: number// [38] 423 (Int)
  Price?: number// [39] 44 (Float)
  StopPx?: number// [40] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [41] SpreadToBenchmark.218
  YieldData?: IYieldData// [42] 
  Currency?: string// [43] 15 (String)
  ComplianceID?: string// [44] 376 (String)
  IOIid?: string// [45] 23 (String)
  QuoteID?: string// [46] 117 (String)
  TimeInForce?: string// [47] 59 (String)
  EffectiveTime?: Date// [48] 168 (UtcTimestamp)
  ExpireDate?: Date// [49] 432 (LocalDate)
  ExpireTime?: Date// [50] 126 (UtcTimestamp)
  GTBookingInst?: number// [51] 427 (Int)
  MaxShow?: number// [52] 210 (Float)
  PegDifference?: number// [53] 211 (Float)
  DiscretionInst?: string// [54] 388 (String)
  DiscretionOffset?: number// [55] 389 (Float)
  AccruedInterestRate?: number// [56] 158 (Float)
  AccruedInterestAmt?: number// [57] 159 (Float)
  NetMoney?: number// [58] 118 (Float)
  StandardTrailer: IStandardTrailer// [59] SignatureLength.93, Signature.89, CheckSum.10
}
