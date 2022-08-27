import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPreAllocGrp } from './set/pre_alloc_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStipulations } from './set/stipulations'
import { IOrderQtyData } from './set/order_qty_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { ICommissionData } from './set/commission_data'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStandardTrailer } from './set/standard_trailer'

export interface INewOrderSingle {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  ClOrdLinkID?: string// [4] 583 (String)
  Parties?: IParties// [5] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeOriginationDate?: Date// [6] 229 (LocalDate)
  TradeDate?: Date// [7] 75 (LocalDate)
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  AccountType?: number// [10] 581 (Int)
  DayBookingInst?: string// [11] 589 (String)
  BookingUnit?: string// [12] 590 (String)
  PreallocMethod?: string// [13] 591 (String)
  AllocID?: string// [14] 70 (String)
  PreAllocGrp?: IPreAllocGrp// [15] NoAllocs.78, AllocAccount.79 .. AllocQty.80
  SettlType?: string// [16] 63 (String)
  SettlDate?: Date// [17] 64 (LocalDate)
  CashMargin?: string// [18] 544 (String)
  ClearingFeeIndicator?: string// [19] 635 (String)
  HandlInst?: string// [20] 21 (String)
  ExecInst?: string// [21] 18 (String)
  MinQty?: number// [22] 110 (Float)
  MaxFloor?: number// [23] 111 (Float)
  ExDestination?: string// [24] 100 (String)
  TrdgSesGrp?: ITrdgSesGrp// [25] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [26] 81 (String)
  Instrument?: IInstrument// [27] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [28] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [29] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  PrevClosePx?: number// [30] 140 (Float)
  Side: string// [31] 54 (String)
  LocateReqd?: boolean// [32] 114 (Boolean)
  TransactTime: Date// [33] 60 (UtcTimestamp)
  Stipulations?: IStipulations// [34] NoStipulations.232, StipulationType.233, StipulationValue.234
  QtyType?: number// [35] 854 (Int)
  OrderQtyData?: IOrderQtyData// [36] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [37] 40 (String)
  PriceType?: number// [38] 423 (Int)
  Price?: number// [39] 44 (Float)
  StopPx?: number// [40] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [41] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [42] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [43] 15 (String)
  ComplianceID?: string// [44] 376 (String)
  SolicitedFlag?: boolean// [45] 377 (Boolean)
  IOIID?: string// [46] 23 (String)
  QuoteID?: string// [47] 117 (String)
  TimeInForce?: string// [48] 59 (String)
  EffectiveTime?: Date// [49] 168 (UtcTimestamp)
  ExpireDate?: Date// [50] 432 (LocalDate)
  ExpireTime?: Date// [51] 126 (UtcTimestamp)
  GTBookingInst?: number// [52] 427 (Int)
  CommissionData?: ICommissionData// [53] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [54] 528 (String)
  OrderRestrictions?: string// [55] 529 (String)
  CustOrderCapacity?: number// [56] 582 (Int)
  ForexReq?: boolean// [57] 121 (Boolean)
  SettlCurrency?: string// [58] 120 (String)
  BookingType?: number// [59] 775 (Int)
  Text?: string// [60] 58 (String)
  EncodedTextLen?: number// [61] 354 (Length)
  EncodedText?: Buffer// [62] 355 (RawData)
  SettlDate2?: Date// [63] 193 (LocalDate)
  OrderQty2?: number// [64] 192 (Float)
  Price2?: number// [65] 640 (Float)
  PositionEffect?: string// [66] 77 (String)
  CoveredOrUncovered?: number// [67] 203 (Int)
  MaxShow?: number// [68] 210 (Float)
  PegInstructions?: IPegInstructions// [69] PegOffsetValue.211, PegMoveType.835 .. PegScope.840
  DiscretionInstructions?: IDiscretionInstructions// [70] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [71] 847 (Int)
  TargetStrategyParameters?: string// [72] 848 (String)
  ParticipationRate?: number// [73] 849 (Float)
  CancellationRights?: string// [74] 480 (String)
  MoneyLaunderingStatus?: string// [75] 481 (String)
  RegistID?: string// [76] 513 (String)
  Designation?: string// [77] 494 (String)
  StandardTrailer: IStandardTrailer// [78] SignatureLength.93, Signature.89, CheckSum.10
}
