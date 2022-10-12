import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { INestedParties } from './set/nested_parties'
import { IInstrument } from './set/instrument'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The new order message type is used by institutions wishing *
* to electronically submit securities and forex orders to a  *
* broker for execution.                                      *
**************************************************************
*/
export interface INewOrderSingle {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ClOrdID: string// [2] 11 (String)
  Parties?: IParties[]// [3] 
  Account?: string// [4] 1 (String)
  NoAllocs?: number// [5] 78 (Int)
  AllocAccount?: string// [6] 79 (String)
  NestedParties?: INestedParties[]// [7] 
  AllocShares?: number// [8] 80 (Float)
  SettlmntTyp?: string// [9] 63 (String)
  FutSettDate?: Date// [10] 64 (LocalDate)
  HandlInst: string// [11] 21 (String)
  ExecInst?: string// [12] 18 (String)
  MinQty?: number// [13] 110 (Float)
  MaxFloor?: number// [14] 111 (Float)
  ExDestination?: string// [15] 100 (String)
  NoTradingSessions?: number// [16] 386 (Int)
  TradingSessionID?: string// [17] 336 (String)
  ProcessCode?: string// [18] 81 (String)
  Instrument: IInstrument// [19] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [20] 140 (Float)
  Side: string// [21] 54 (String)
  LocateReqd?: boolean// [22] 114 (Boolean)
  TransactTime: Date// [23] 60 (UtcTimestamp)
  Stipulations?: IStipulations[]// [24] 
  OrderQtyData: IOrderQtyData// [25] OrderQty.38, CashOrderQty.152
  OrdType: string// [26] 40 (String)
  PriceType?: number// [27] 423 (Int)
  Price?: number// [28] 44 (Float)
  StopPx?: number// [29] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [30] SpreadToBenchmark.218
  YieldData?: IYieldData// [31] 
  Currency?: string// [32] 15 (String)
  ComplianceID?: string// [33] 376 (String)
  SolicitedFlag?: boolean// [34] 377 (Boolean)
  IOIid?: string// [35] 23 (String)
  QuoteID?: string// [36] 117 (String)
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
  PegDifference?: number// [54] 211 (Float)
  DiscretionInst?: string// [55] 388 (String)
  DiscretionOffset?: number// [56] 389 (Float)
  AccruedInterestRate?: number// [57] 158 (Float)
  AccruedInterestAmt?: number// [58] 159 (Float)
  NetMoney?: number// [59] 118 (Float)
  StandardTrailer: IStandardTrailer// [60] SignatureLength.93, Signature.89, CheckSum.10
}
