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
*************************************************************
* The NewOrderList Message can be used in one of two ways   *
* depending on which market conventions are being followed. *
*************************************************************
*/
export interface INewOrderList {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ListID: string// [2] 66 (String)
  BidID?: string// [3] 390 (String)
  ClientBidID?: string// [4] 391 (String)
  ProgRptReqs?: number// [5] 414 (Int)
  BidType: number// [6] 394 (Int)
  ProgPeriodInterval?: number// [7] 415 (Int)
  ListExecInstType?: string// [8] 433 (String)
  ListExecInst?: string// [9] 69 (String)
  EncodedListExecInstLen?: number// [10] 352 (Int)
  EncodedListExecInst?: Buffer// [11] 353 (RawData)
  TotNoOrders: number// [12] 68 (Int)
  NoOrders: number// [13] 73 (Int)
  ClOrdID: string// [14] 11 (String)
  ListSeqNo: number// [15] 67 (Int)
  SettlInstMode?: string// [16] 160 (String)
  Parties?: IParties[]// [17] 
  Account?: string// [18] 1 (String)
  NoAllocs?: number// [19] 78 (Int)
  AllocAccount?: string// [20] 79 (String)
  NestedParties?: INestedParties[]// [21] 
  AllocShares?: number// [22] 80 (Float)
  SettlmntTyp?: string// [23] 63 (String)
  FutSettDate?: Date// [24] 64 (LocalDate)
  HandlInst?: string// [25] 21 (String)
  ExecInst?: string// [26] 18 (String)
  MinQty?: number// [27] 110 (Float)
  MaxFloor?: number// [28] 111 (Float)
  ExDestination?: string// [29] 100 (String)
  NoTradingSessions?: number// [30] 386 (Int)
  TradingSessionID?: string// [31] 336 (String)
  ProcessCode?: string// [32] 81 (String)
  Instrument: IInstrument// [33] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [34] 140 (Float)
  Side: string// [35] 54 (String)
  SideValueInd?: number// [36] 401 (Int)
  LocateReqd?: boolean// [37] 114 (Boolean)
  TransactTime?: Date// [38] 60 (UtcTimestamp)
  Stipulations?: IStipulations[]// [39] 
  OrderQtyData: IOrderQtyData// [40] OrderQty.38, CashOrderQty.152
  OrdType?: string// [41] 40 (String)
  PriceType?: number// [42] 423 (Int)
  Price?: number// [43] 44 (Float)
  StopPx?: number// [44] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [45] SpreadToBenchmark.218
  YieldData?: IYieldData// [46] 
  Currency?: string// [47] 15 (String)
  ComplianceID?: string// [48] 376 (String)
  SolicitedFlag?: boolean// [49] 377 (Boolean)
  IOIid?: string// [50] 23 (String)
  QuoteID?: string// [51] 117 (String)
  TimeInForce?: string// [52] 59 (String)
  EffectiveTime?: Date// [53] 168 (UtcTimestamp)
  ExpireDate?: Date// [54] 432 (LocalDate)
  ExpireTime?: Date// [55] 126 (UtcTimestamp)
  GTBookingInst?: number// [56] 427 (Int)
  CommissionData?: ICommissionData// [57] Commission.12, CommType.13
  Rule80A?: string// [58] 47 (String)
  ForexReq?: boolean// [59] 121 (Boolean)
  SettlCurrency?: string// [60] 120 (String)
  Text?: string// [61] 58 (String)
  EncodedTextLen?: number// [62] 354 (Int)
  EncodedText?: Buffer// [63] 355 (RawData)
  FutSettDate2?: Date// [64] 193 (LocalDate)
  OrderQty2?: number// [65] 192 (Float)
  OpenClose?: string// [66] 77 (String)
  CoveredOrUncovered?: number// [67] 203 (Int)
  MaxShow?: number// [68] 210 (Float)
  PegDifference?: number// [69] 211 (Float)
  DiscretionInst?: string// [70] 388 (String)
  DiscretionOffset?: number// [71] 389 (Float)
  AccruedInterestRate?: number// [72] 158 (Float)
  AccruedInterestAmt?: number// [73] 159 (Float)
  NetMoney?: number// [74] 118 (Float)
  StandardTrailer: IStandardTrailer// [75] SignatureLength.93, Signature.89, CheckSum.10
}
