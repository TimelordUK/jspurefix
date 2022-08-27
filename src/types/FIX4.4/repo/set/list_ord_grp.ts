import { IParties } from './parties'
import { IPreAllocGrp } from './pre_alloc_grp'
import { ITrdgSesGrp } from './trdg_ses_grp'
import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { IOrderQtyData } from './order_qty_data'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { ICommissionData } from './commission_data'
import { IPegInstructions } from './peg_instructions'
import { IDiscretionInstructions } from './discretion_instructions'

export interface IListOrdGrp {
  ClOrdID: string// [1] 11 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  ListSeqNo: number// [3] 67 (Int)
  ClOrdLinkID?: string// [4] 583 (String)
  SettlInstMode?: string// [5] 160 (String)
  Parties?: IParties[]// [6] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeOriginationDate?: Date// [7] 229 (LocalDate)
  TradeDate?: Date// [8] 75 (LocalDate)
  Account?: string// [9] 1 (String)
  AcctIDSource?: number// [10] 660 (Int)
  AccountType?: number// [11] 581 (Int)
  DayBookingInst?: string// [12] 589 (String)
  BookingUnit?: string// [13] 590 (String)
  AllocID?: string// [14] 70 (String)
  PreallocMethod?: string// [15] 591 (String)
  PreAllocGrp?: IPreAllocGrp[]// [16] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
  SettlType?: string// [17] 63 (String)
  SettlDate?: Date// [18] 64 (LocalDate)
  CashMargin?: string// [19] 544 (String)
  ClearingFeeIndicator?: string// [20] 635 (String)
  HandlInst?: string// [21] 21 (String)
  ExecInst?: string// [22] 18 (String)
  MinQty?: number// [23] 110 (Float)
  MaxFloor?: number// [24] 111 (Float)
  ExDestination?: string// [25] 100 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [26] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [27] 81 (String)
  Instrument: IInstrument// [28] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp?: IUndInstrmtGrp[]// [29] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  PrevClosePx?: number// [30] 140 (Float)
  Side: string// [31] 54 (String)
  SideValueInd?: number// [32] 401 (Int)
  LocateReqd?: boolean// [33] 114 (Boolean)
  TransactTime?: Date// [34] 60 (UtcTimestamp)
  Stipulations?: IStipulations[]// [35] StipulationType.233, StipulationValue.234
  QtyType?: number// [36] 854 (Int)
  OrderQtyData: IOrderQtyData// [37] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType?: string// [38] 40 (String)
  PriceType?: number// [39] 423 (Int)
  Price?: number// [40] 44 (Float)
  StopPx?: number// [41] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [42] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [43] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [44] 15 (String)
  ComplianceID?: string// [45] 376 (String)
  SolicitedFlag?: boolean// [46] 377 (Boolean)
  IOIID?: string// [47] 23 (String)
  QuoteID?: string// [48] 117 (String)
  TimeInForce?: string// [49] 59 (String)
  EffectiveTime?: Date// [50] 168 (UtcTimestamp)
  ExpireDate?: Date// [51] 432 (LocalDate)
  ExpireTime?: Date// [52] 126 (UtcTimestamp)
  GTBookingInst?: number// [53] 427 (Int)
  CommissionData?: ICommissionData// [54] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [55] 528 (String)
  OrderRestrictions?: string// [56] 529 (String)
  CustOrderCapacity?: number// [57] 582 (Int)
  ForexReq?: boolean// [58] 121 (Boolean)
  SettlCurrency?: string// [59] 120 (String)
  BookingType?: number// [60] 775 (Int)
  Text?: string// [61] 58 (String)
  EncodedTextLen?: number// [62] 354 (Int)
  EncodedText?: Buffer// [63] 355 (RawData)
  SettlDate2?: Date// [64] 193 (LocalDate)
  OrderQty2?: number// [65] 192 (Float)
  Price2?: number// [66] 640 (Float)
  PositionEffect?: string// [67] 77 (String)
  CoveredOrUncovered?: number// [68] 203 (Int)
  MaxShow?: number// [69] 210 (Float)
  PegInstructions?: IPegInstructions// [70] PegOffsetValue.211, PegMoveType.835 .. PegScope.840
  DiscretionInstructions?: IDiscretionInstructions// [71] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [72] 847 (Int)
  TargetStrategyParameters?: string// [73] 848 (String)
  ParticipationRate?: number// [74] 849 (Float)
  Designation?: string// [75] 494 (String)
}
