import { IParties } from './parties'
import { IPreAllocGrp } from './pre_alloc_grp'
import { IDisplayInstruction } from './display_instruction'
import { ITrdgSesGrp } from './trdg_ses_grp'
import { IInstrument } from './instrument'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { IStipulations } from './stipulations'
import { IOrderQtyData } from './order_qty_data'
import { ITriggeringInstruction } from './triggering_instruction'
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data'
import { IYieldData } from './yield_data'
import { ICommissionData } from './commission_data'
import { IPegInstructions } from './peg_instructions'
import { IDiscretionInstructions } from './discretion_instructions'
import { IStrategyParametersGrp } from './strategy_parameters_grp'

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
  MatchIncrement?: number// [24] 1089 (Float)
  MaxPriceLevels?: number// [25] 1090 (Int)
  DisplayInstruction?: IDisplayInstruction// [26] DisplayQty.1138, SecondaryDisplayQty.1082 .. RefreshQty.1088
  MaxFloor?: number// [27] 111 (Float)
  ExDestination?: string// [28] 100 (String)
  ExDestinationIDSource?: string// [29] 1133 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [30] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [31] 81 (String)
  Instrument: IInstrument// [32] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [33] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  PrevClosePx?: number// [34] 140 (Float)
  Side: string// [35] 54 (String)
  SideValueInd?: number// [36] 401 (Int)
  LocateReqd?: boolean// [37] 114 (Boolean)
  TransactTime?: Date// [38] 60 (UtcTimestamp)
  Stipulations?: IStipulations[]// [39] StipulationType.233, StipulationValue.234
  QtyType?: number// [40] 854 (Int)
  OrderQtyData: IOrderQtyData// [41] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType?: string// [42] 40 (String)
  PriceType?: number// [43] 423 (Int)
  Price?: number// [44] 44 (Float)
  PriceProtectionScope?: string// [45] 1092 (String)
  StopPx?: number// [46] 99 (Float)
  TriggeringInstruction?: ITriggeringInstruction// [47] TriggerType.1100, TriggerAction.1101 .. TriggerTradingSessionSubID.1114
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [48] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [49] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Currency?: string// [50] 15 (String)
  ComplianceID?: string// [51] 376 (String)
  SolicitedFlag?: boolean// [52] 377 (Boolean)
  IOIID?: string// [53] 23 (String)
  QuoteID?: string// [54] 117 (String)
  RefOrderID?: string// [55] 1080 (String)
  RefOrderIDSource?: string// [56] 1081 (String)
  TimeInForce?: string// [57] 59 (String)
  EffectiveTime?: Date// [58] 168 (UtcTimestamp)
  ExpireDate?: Date// [59] 432 (LocalDate)
  ExpireTime?: Date// [60] 126 (UtcTimestamp)
  GTBookingInst?: number// [61] 427 (Int)
  CommissionData?: ICommissionData// [62] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [63] 528 (String)
  OrderRestrictions?: string// [64] 529 (String)
  PreTradeAnonymity?: boolean// [65] 1091 (Boolean)
  CustOrderCapacity?: number// [66] 582 (Int)
  ForexReq?: boolean// [67] 121 (Boolean)
  SettlCurrency?: string// [68] 120 (String)
  BookingType?: number// [69] 775 (Int)
  Text?: string// [70] 58 (String)
  EncodedTextLen?: number// [71] 354 (Int)
  EncodedText?: Buffer// [72] 355 (RawData)
  SettlDate2?: Date// [73] 193 (LocalDate)
  OrderQty2?: number// [74] 192 (Float)
  Price2?: number// [75] 640 (Float)
  PositionEffect?: string// [76] 77 (String)
  CoveredOrUncovered?: number// [77] 203 (Int)
  MaxShow?: number// [78] 210 (Float)
  PegInstructions?: IPegInstructions// [79] PegOffsetValue.211, PegPriceType.1094 .. PegSecurityDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [80] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [81] 847 (Int)
  StrategyParametersGrp?: IStrategyParametersGrp[]// [82] StrategyParameterName.958, StrategyParameterType.959, StrategyParameterValue.960
  TargetStrategyParameters?: string// [83] 848 (String)
  ParticipationRate?: number// [84] 849 (Float)
  Designation?: string// [85] 494 (String)
}
